import { Page } from "../types";

export const parseReversePolish = (equation: string): string | number => {
  return "";
};

export const templatePage: Page = {
  name: "Template",
  markup: [
    ["h2", {}, "Template"],
    ["p", {}, "Algorithm description goes here"],
    ["h3", {}, "Output:"],
    ["div", { id: "output" }],
  ],
  inputs: [],
  update: () => {},
};
