declare const userIdBrand: unique symbol;
type UserId = string & { readonly [userIdBrand]: true };

function createUserId(value: string): UserId {
  // TODO：先要求 usr_ 开头且后面非空；验证后集中做一次窄断言。
  return value;
}

function profilePath(id: UserId): string {
  return `/users/${id}`;
}

console.log(profilePath(createUserId("usr_42")));
