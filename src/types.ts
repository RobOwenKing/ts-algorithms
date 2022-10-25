export interface Attributes {
  // Basics
  id?: string;
  class?: string;
  // <label>
  for?: string;
  // <input>
  type?: string;
  value?: number | string;
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
