import { assert, complete, equal } from "../../src/shared/check.js";

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

export function transition(
  state: WithdrawalState,
  event: WithdrawalEvent,
): WithdrawalState {
  void state;
  void event;
  throw new Error("TODO: implement legal state/event combinations");
}

export function changeDestination(
  state: WithdrawalState,
  destination: string,
): WithdrawalState {
  // BUG: an assertion allows changing the address after review/approval.
  return { ...state, destination } as WithdrawalState;
}

const draft: WithdrawalState = {
  kind: "draft",
  destination: "0xaaa",
  amount: 1n,
};
const review = transition(draft, { type: "submit", requestId: "req-1" });
equal(review.kind, "review", "submits draft for review");
const approved = transition(review, { type: "approve" });
equal(approved.kind, "approved", "approves a reviewed request");
const broadcast = transition(approved, { type: "broadcast", txHash: "0xhash" });
const completed = transition(broadcast, { type: "confirm", confirmations: 12 });
equal(completed.kind, "completed", "confirms a broadcast transaction");

let destinationLocked = false;
try {
  changeDestination(approved, "0xattacker");
} catch {
  destinationLocked = true;
}
assert(destinationLocked, "destination is immutable after submission");
complete("day20");
