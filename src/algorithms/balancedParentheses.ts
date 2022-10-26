import { Page } from "../types";

import { Stack } from "../data_structures/stack";

const matches: { [key: string]: string } = {
  ")": "(",
  "}": "{",
  "]": "[",
  ">": "<",
};

const areParenthesesBalanced = (str: string): boolean => {
  const stack = new Stack<string>();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (["(", "{", "[", "<"].includes(char)) {
      stack.push(char);
      continue;
    }

    if (![")", "}", "]", ">"].includes(char)) {
      continue;
    }

    if (stack.pop() === matches[char]) {
      continue;
    }

    return false;
  }

  return stack.length() === 0;
};

export const balancedParenthesesPage: Page = {
  name: "Balanced Parentheses",
  markup: [
    ["h2", {}, "Balanced Parentheses"],
    ["p", {}, "Checks valid bracketing of the pairs (), [], {} and <>."],
    ["textarea", { id: "input", rows: 8, cols: 32 }],
    ["h3", {}, "Are the Parentheses Balanced?"],
    ["div", { id: "output" }],
  ],
  listeners: [
    {
      type: "input",
      ids: ["input"],
      callback: () => {
        const input = <HTMLTextAreaElement>document.getElementById("input");
        const output = document.getElementById("output");
        const isBalanced = areParenthesesBalanced(input.value);

        output.innerText = isBalanced ? "Yes" : "No";
      },
    },
  ],
};
