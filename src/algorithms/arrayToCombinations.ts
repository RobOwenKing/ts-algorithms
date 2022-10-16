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
  ],
  inputs: [],
  update: () => {
    arrayToCombinations([]);
  },
};
