import { Page } from "../types";

const arrayToCombinations = (arr: string[]): string[] => {
  return arr;
};

export const arrayToCombinationsPage: Page = {
  name: "Array to Combinations",
  markup: [
    ["h2", {}, "Array to Combinations"],
    [
      "p",
      {},
      "Returns all combinations of given number of elements from given array.",
    ],
    ["label", { for: "array" }, "Array: "],
    ["input", { id: "array" }],
    ["label", { for: "n" }, "Elements per combination: "],
    ["input", { id: "n", type: "number", value: 1, min: 1 }],
    ["label", { for: "separator" }, "Start: "],
    ["input", { id: "separator", placeholder: ";" }],
    ["h3", {}, "All combinations of n elements:"],
    ["div", { id: "output" }],
  ],
  inputs: [],
  update: () => {
    arrayToCombinations([]);
  },
};
