import { Page } from "../types";

import { Stack } from "../data_structures/stack";

const calculate = (operator: string, a: number, b: number): number => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "^":
      return a ** b;
    default:
      return 0;
  }
};

export const parseReversePolish = (equation: string): string | number => {
  const stack = new Stack<number>();

  equation.split(" ").forEach((term) => {
    if (term.match(/\-?[0-9]+/)) {
      stack.push(parseInt(term));
    } else if (["+", "-", "/", "*", "^"].includes(term)) {
      stack.push(calculate(term, stack.pop(), stack.pop()));
    } else {
      return "Invalid input";
    }
  });

  return stack.length() == 1 ? stack.pop() : "Invalid input";
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
