type RouteName = "home" | "about" | "learn";

const routeNames: readonly RouteName[] = ["home", "about", "learn"];

const paths = {
  home: "/",
  about: "/wrong-about",
  learn: "/start",
};

for (const routeName of routeNames) {
  console.log(routeName + "=" + paths[routeName]);
}
