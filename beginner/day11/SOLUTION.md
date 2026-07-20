# Day 11 参考答案说明

## 解题路线

`StudyTask` 用 `status` 把不同数据拆成四个合法成员。`describeTask` 先检查判别字段，因此每个 `case` 只会看到当前成员拥有的属性。

`completed` 已经收窄了联合，但 `score` 自身仍可能是 `undefined`。答案用 `??` 生成“待评分”，并只在确实有分数时追加单位。`default` 中的 `task` 在所有成员都处理后是 `never`；未来添加状态却忘记分支时，这里会首先报错。

## 易错点

不要把 `score`、`minutes` 和 `reason` 全部写成可选属性，也不要用 `!` 或 `as` 绕过检查。类型正确不代表业务文字一定正确，所以仍要对照五行精确输出。

## 拓展思考参考方向

加入 `paused` 后，构造输入的地方会接受新成员，而 `describeTask` 的 `default` 会因为 `task` 不再是 `never` 而报错。补上 `paused` 分支后错误消失，这正是在强迫所有消费者同步处理新状态。
