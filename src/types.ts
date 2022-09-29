export interface Attributes {
  for?: string;
  type?: string;
  id?: string;
  value?: number;
  min?: number;
}

type ElementParams = [string, Attributes, string?][];

interface Page {
  markup: ElementParams;
  inputs: string[];
  update: () => void;
}

export type Data = { [index: string]: Page };
