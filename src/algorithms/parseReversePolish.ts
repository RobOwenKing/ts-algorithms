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
      if (stack.length() < 2) {
        invalid = true;
        return;
      }
      stack.push(calculate(term, stack.pop(), stack.pop()));
    } else {
      invalid = true;
    }
  });

  return stack.length() == 1 && !invalid ? stack.pop() : "Invalid input";
};

export const parseReversePolishPage: Page = {
  name: "Reverse Polish Notation",
  markup: [
    ["h2", {}, "Parse Reverse Polish Notation"],
    ["p", {}, "Algorithm description goes here"],
    ["label", { for: "input" }, "Equation: "],
    ["input", { id: "input" }],
    ["h3", {}, "Output:"],
    ["div", { id: "output", class: "output" }],
  ],
  inputs: ["input"],
  update: () => {
    const input = <HTMLInputElement>document.getElementById("input");
    const output = document.getElementById("output");

    const answer = parseReversePolish(input.value);
    if (answer === "Invalid input") {
      output.dataset.valid = "false";
    } else {
      output.textContent = `= ${answer}`;
      output.dataset.valid = "true";
    }
  },
};
