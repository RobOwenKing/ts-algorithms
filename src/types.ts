export interface Attributes {
  // Basics
  id?: string;
  class?: string;
  // <a>
  href?: string;
  // <input>
  type?: string;
  value?: number | string;
  min?: number;
  rows?: number;
  cols?: number;
  // <label>
  for?: string;
}

/* type, options, innerText?, children? */
export type ElementParams = [string, Attributes, string?, ElementParams?][];

/* type, targets, update */
type Listener = [string, string[], () => void];

export interface Page {
  name: string;
  markup: ElementParams;
  inputs: string[];
  update: () => void;
}

export type Data = { [index: string]: Page };
