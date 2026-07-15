import { complete, deepEqual, equal } from "../../src/shared/check.js";

const auditLog: string[] = [];

export function traced<This, Args extends unknown[], Return>(
  original: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >,
): (this: This, ...args: Args) => Return {
  void original;
  void context;
  throw new Error("TODO: return a method wrapper that records context.name");
}

// Mixin constructors are the one deliberate `any[]` escape hatch here: the mixin
// forwards an unknown constructor signature without reading those values.
type Constructor = new (...args: any[]) => object;
function WithVerification<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    public constructor(...args: any[]) {
      super(...args);
    }

    public verified = false;
    public verify(): void {
      // BUG: verification is an idempotent state, not a toggle action.
      this.verified = !this.verified;
    }
  };
}

class InspectorBase {
  @traced
  inspect(id: string): string {
    return `INSPECT ${id}`;
  }
}

const VerifiedInspector = WithVerification(InspectorBase);
const inspector = new VerifiedInspector();
equal(
  inspector.inspect("route-1"),
  "INSPECT route-1",
  "preserves method behavior",
);
deepEqual(auditLog, ["inspect"], "records the decorated call");
inspector.verify();
inspector.verify();
equal(
  inspector.verified,
  true,
  "verification remains true after repeated calls",
);
complete("day17");
