import { Page } from "../types";

const arrayToCombinations = (arr: string[], kay: number): string[][] => {
  if (kay === 1) {
    return arr.map((e) => [e]);
  } else {
    return arrayToCombinations(arr, kay - 1);
  }
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
    ["label", { for: "kay" }, "Elements per combination: "],
    ["input", { id: "kay", type: "number", value: 1, min: 1 }],
    ["label", { for: "separator" }, "Start: "],
    ["input", { id: "separator", value: ";" }],
    ["h3", {}, "All combinations of n elements:"],
    ["div", { id: "output" }],
  ],
  inputs: ["array", "n", "separator"],
  update: () => {
    const arrInput = <HTMLInputElement>document.getElementById("array");
    const kayInput = <HTMLInputElement>document.getElementById("kay");
    const sepInput = <HTMLInputElement>document.getElementById("separator");

    const arr = arrInput.value.split(sepInput.value);
    const kay = parseInt(kayInput.value);

    const combinations = arrayToCombinations(arr, kay);

    document.getElementById("output").textContent =
      JSON.stringify(combinations);
  },
};
