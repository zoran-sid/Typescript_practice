const score: number | undefined = 0;
const nickname: string | undefined = "";

const shownScore = score ?? 100;
const shownNickname = nickname ?? "匿名";

console.log(`分数: ${shownScore}`);
console.log(`昵称: ${JSON.stringify(shownNickname)}`);

export {};
