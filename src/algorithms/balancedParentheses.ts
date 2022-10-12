import { Page } from "../types";

import { Stack } from "../data_structures/stack";

const areParenthesesBalanced = (str: string): boolean => {
  return true;
};

export const balancedParenthesesPage: Page = {
  name: "Balanced Parentheses",
  markup: [
    ["h2", {}, "Balanced Parentheses"],
    ["p", {}, "text."],
    ["textarea", {}],
    ["h3", {}, "Output"],
    ["div", { id: "output" }],
  ],
  inputs: ["seed", "terms"],
  update: () => {
    areParenthesesBalanced("temp");
  },
};
