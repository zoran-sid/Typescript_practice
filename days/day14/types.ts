export interface LabModule {
  id: string;
  title: string;
  enabled: boolean;
}

export type ModuleFactory = (id: string, title: string) => LabModule;
