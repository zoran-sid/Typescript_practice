type RouteName = "home" | "about" | "learn";

const routeNames: readonly RouteName[] = ["home", "about", "learn"];

const paths = {
  home: "/",
  about: "/about",
  learn: "/learn",
} satisfies Record<RouteName, string>;

for (const routeName of routeNames) {
  console.log(routeName + "=" + paths[routeName]);
}
