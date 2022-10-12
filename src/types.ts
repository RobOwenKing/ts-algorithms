export interface Attributes {
  for?: string;
  type?: string;
  id?: string;
  value?: number;
  min?: number;
  rows?: number;
  cols?: number;
}

type ElementParams = [string, Attributes, string?][];

export interface Page {
  name: string;
  markup: ElementParams;
  inputs: string[];
  update: () => void;
}

export type Data = { [index: string]: Page };
