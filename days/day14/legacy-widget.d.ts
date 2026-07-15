declare module "legacy-status-widget" {
  export interface WidgetOptions {
    target: string;
    status: "online" | "offline";
  }

  export function mount(options: WidgetOptions): () => void;
}
