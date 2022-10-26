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

interface Listener {
  type: string;
  ids: string[];
  callback: () => void;
}

export interface Page {
  name: string;
  markup: ElementParams;
  listeners: Listener[];
}

export type Data = { [index: string]: Page };
