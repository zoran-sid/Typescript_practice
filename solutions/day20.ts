import { assert, complete, equal } from "../src/shared/check.js";

type WithdrawalState =
  | { kind: "draft"; destination: string; amount: bigint }
  | { kind: "review"; requestId: string; destination: string; amount: bigint }
  | { kind: "approved"; requestId: string; destination: string; amount: bigint }
  | { kind: "broadcast"; requestId: string; txHash: string }
  | {
      kind: "completed";
      requestId: string;
      txHash: string;
      confirmations: number;
    };
type WithdrawalEvent =
  | { type: "submit"; requestId: string }
  | { type: "approve" }
  | { type: "broadcast"; txHash: string }
  | { type: "confirm"; confirmations: number };
function transition(
  state: WithdrawalState,
  event: WithdrawalEvent,
): WithdrawalState {
  if (state.kind === "draft" && event.type === "submit")
    return {
      kind: "review",
      requestId: event.requestId,
      destination: state.destination,
      amount: state.amount,
    };
  if (state.kind === "review" && event.type === "approve")
    return { ...state, kind: "approved" };
  if (state.kind === "approved" && event.type === "broadcast")
    return {
      kind: "broadcast",
      requestId: state.requestId,
      txHash: event.txHash,
    };
  if (state.kind === "broadcast" && event.type === "confirm")
    return {
      kind: "completed",
      requestId: state.requestId,
      txHash: state.txHash,
      confirmations: event.confirmations,
    };
  throw new Error(`Illegal transition: ${state.kind} + ${event.type}`);
}
function changeDestination(
  state: WithdrawalState,
  destination: string,
): WithdrawalState {
  if (state.kind !== "draft")
    throw new Error("Destination is locked after submission");
  return { ...state, destination };
}
const draft: WithdrawalState = {
  kind: "draft",
  destination: "0xaaa",
  amount: 1n,
};
const review = transition(draft, { type: "submit", requestId: "req-1" });
const approved = transition(review, { type: "approve" });
equal(
  transition(transition(approved, { type: "broadcast", txHash: "0xhash" }), {
    type: "confirm",
    confirmations: 12,
  }).kind,
  "completed",
  "workflow",
);
let locked = false;
try {
  changeDestination(approved, "0xattacker");
} catch {
  locked = true;
}
assert(locked, "locked");
complete("day20 solution");
