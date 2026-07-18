const score: number | undefined = 0;
const nickname: string | undefined = "";

// TODO：0 和空字符串是有效值，不应被默认值替换。
const shownScore = score || 100;
const shownNickname = nickname || "匿名";

console.log(`分数: ${shownScore}`);
console.log(`昵称: ${JSON.stringify(shownNickname)}`);

export {};
