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
    ["input", { id: "separator", value: ";" }],
    ["h3", {}, "All combinations of n elements:"],
    ["div", { id: "output" }],
  ],
  inputs: ["array", "n", "separator"],
  update: () => {
    const arrInput = <HTMLInputElement>document.getElementById("array");
    const sepInput = <HTMLInputElement>document.getElementById("separator");
    const arr = arrInput.value.split(sepInput.value);

    const combinations = arrayToCombinations(arr);

    document.getElementById("output").textContent =
      JSON.stringify(combinations);
  },
};
