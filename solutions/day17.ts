import { complete, deepEqual, equal } from "../src/shared/check.js";

const auditLog: string[] = [];
function traced<This, Args extends unknown[], Return>(
  original: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >,
): (this: This, ...args: Args) => Return {
  return function (this: This, ...args: Args): Return {
    auditLog.push(String(context.name));
    return original.call(this, ...args);
  };
}
type Constructor = new (...args: any[]) => object;
function WithVerification<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    constructor(...args: any[]) {
      super(...args);
    }
    verified = false;
    verify(): void {
      this.verified = true;
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
equal(inspector.inspect("route-1"), "INSPECT route-1", "behavior");
deepEqual(auditLog, ["inspect"], "trace");
inspector.verify();
inspector.verify();
equal(inspector.verified, true, "idempotent");
complete("day17 solution");
