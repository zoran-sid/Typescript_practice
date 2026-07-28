// 这是解题结构，不是完整答案。TODO 旁的空字符串、0、false、[] 等只是占位值，完成时要替换或删除。
const failedChecks = 0;
const hasApproval = true;
const isHotfix = true;

const hasFailure = false; // TODO：让它表示“至少有一项检查失败”。
const canFastTrack = false; // TODO：让它表示“这是热修复，并且已经得到审批”。

let decision = "";
if (hasFailure) {
  // TODO：失败检查优先级最高，把 decision 更新为 "Blocked"。
} else if (canFastTrack) {
  // TODO：没有失败且满足快速通道条件，把 decision 更新为 "Fast track"。
} else if (hasApproval) {
  // TODO：没有失败、不是快速通道，但已有审批，把 decision 更新为 "Ready"。
} else {
  // TODO：前面都不成立，把 decision 更新为 "Waiting approval"。
}

const canDeploy = false; // TODO：同时检查“没有失败”与“已经审批”，保存最终布尔结果。

console.log(`Decision: ${decision}`);
console.log(`Can deploy: ${canDeploy}`);
console.log(`Failed checks: ${failedChecks}`);
