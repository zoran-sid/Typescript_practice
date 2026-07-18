declare const userIdBrand: unique symbol;
type UserId = string & { readonly [userIdBrand]: true };

function createUserId(value: string): UserId {
  if (!value.startsWith("usr_") || value.length <= 4) {
    throw new Error("Invalid user id");
  }
  return value as UserId;
}

function profilePath(id: UserId): string {
  return `/users/${id}`;
}

console.log(profilePath(createUserId("usr_42")));
