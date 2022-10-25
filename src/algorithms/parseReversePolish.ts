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
      stack.push(parseFloat(term));
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
    [
      "p",
      {},
      "Created by logician Jan Łukasiewicz in 1924, Polish notation is a less ambiguous way to write mathematical expressions than traditional infix notations, removing the need for parentheses. ",
      [
        [
          "a",
          { href: "https://en.wikipedia.org/wiki/Reverse_Polish_notation" },
          "Read more on Wikipedia",
        ],
      ],
    ],
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
