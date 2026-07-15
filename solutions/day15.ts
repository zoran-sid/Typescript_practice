import { complete, equal } from "../src/shared/check.js";

type KeyboardAction = "open-search" | "close" | "previous" | "next" | "none";
type KeyInput = Pick<KeyboardEvent, "key" | "ctrlKey" | "metaKey">;
type Locale = "zh-CN" | "en";
function keyboardAction(event: KeyInput): KeyboardAction {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k")
    return "open-search";
  if (event.key === "Escape") return "close";
  if (event.key === "ArrowUp") return "previous";
  if (event.key === "ArrowDown") return "next";
  return "none";
}
function datasetLocale(value: string | undefined): Locale {
  return value === "en" || value === "zh-CN" ? value : "zh-CN";
}
equal(
  keyboardAction({ key: "k", ctrlKey: true, metaKey: false }),
  "open-search",
  "open",
);
equal(
  keyboardAction({ key: "Escape", ctrlKey: false, metaKey: false }),
  "close",
  "close",
);
equal(datasetLocale("fr"), "zh-CN", "fallback");
complete("day15 solution");
