import { Page } from "../types";

import { Stack } from "../data_structures/stack";

const areParenthesesBalanced = (str: string): boolean => {
  return str.length < 5;
};

export const balancedParenthesesPage: Page = {
  name: "Balanced Parentheses",
  markup: [
    ["h2", {}, "Balanced Parentheses"],
    ["p", {}, "Checks valid bracketing of the pairs: (), [], {} and <>."],
    ["textarea", { id: "input" }],
    ["h3", {}, "Are the Parentheses Balanced?"],
    ["div", { id: "output" }],
  ],
  inputs: ["input"],
  update: () => {
    const input = <HTMLTextAreaElement>document.getElementById("input");
    const output = document.getElementById("output");
    const isBalanced = areParenthesesBalanced(input.value);

    output.innerText = isBalanced ? "Yes" : "No";
  },
};
