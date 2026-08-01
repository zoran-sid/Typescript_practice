const failedChecks = 0;
const hasApproval = true;
const isHotfix = true;

const hasFailure = failedChecks > 0;
const canFastTrack = isHotfix && hasApproval;

let decision = "";
// 失败检查优先级最高；没有失败时，才继续检查快速通道和普通审批。
if (hasFailure) {
  decision = "Blocked";
} else if (canFastTrack) {
  decision = "Fast track";
} else if (hasApproval) {
  decision = "Ready";
} else {
  decision = "Waiting approval";
}

const canDeploy = !hasFailure && hasApproval;

// 调用关系：发布数据 -> 两个布尔结果 -> 优先级分支 -> decision/canDeploy -> 输出。
console.log(`Decision: ${decision}`);
console.log(`Can deploy: ${canDeploy}`);
console.log(`Failed checks: ${failedChecks}`);
