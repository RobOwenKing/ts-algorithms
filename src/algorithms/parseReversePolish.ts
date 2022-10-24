import { Page } from "../types";

import { Stack } from "../data_structures/stack";

const calculate = (operator: string, a: number, b: number): number => {
  switch (operator) {
    case "+":
      return b + a;
    case "-":
      return b - a;
    case "*":
      return b * a;
    case "/":
      return b / a;
    case "^":
      return b ** a;
    default:
      return 0;
  }
};

export const parseReversePolish = (equation: string): string | number => {
  const stack = new Stack<number>();
  let invalid = false;

  equation.split(" ").forEach((term) => {
    if (/\-?[0-9]+/.test(term)) {
      stack.push(parseInt(term));
    } else if (["+", "-", "/", "*", "^"].includes(term)) {
      stack.push(calculate(term, stack.pop(), stack.pop()));
    } else {
      invalid = true;
    }
  });

  return stack.length() == 1 && !invalid ? stack.pop() : "Invalid input";
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
