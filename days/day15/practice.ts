import { complete, equal } from "../../src/shared/check.js";

type KeyboardAction = "open-search" | "close" | "previous" | "next" | "none";
type KeyInput = Pick<KeyboardEvent, "key" | "ctrlKey" | "metaKey">;
type Locale = "zh-CN" | "en";

export function requireElement<T extends Element>(
  root: ParentNode,
  selector: string,
): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Required element not found: ${selector}`);
  return element;
}

export function keyboardAction(event: KeyInput): KeyboardAction {
  void event;
  throw new Error("TODO: map the supported keyboard commands");
}

export function datasetLocale(value: string | undefined): Locale {
  // BUG: a type assertion does not reject “fr” or arbitrary text.
  return (value ?? "zh-CN") as Locale;
}

equal(
  keyboardAction({ key: "k", ctrlKey: true, metaKey: false }),
  "open-search",
  "opens search with Ctrl+K",
);
equal(
  keyboardAction({ key: "Escape", ctrlKey: false, metaKey: false }),
  "close",
  "closes with Escape",
);
equal(
  keyboardAction({ key: "ArrowDown", ctrlKey: false, metaKey: false }),
  "next",
  "moves to next result",
);
equal(datasetLocale("fr"), "zh-CN", "falls back for unsupported dataset input");
equal(datasetLocale("en"), "en", "accepts a supported locale");
complete("day15");
