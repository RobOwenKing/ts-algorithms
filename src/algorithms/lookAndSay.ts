import { Page } from "../types";

export const getNextLookAndSayTerm = (num: string): string => {
  let currentChar = num[0];
  let count = 0;
  let newNum = "";

  for (const char of num + ".") {
    if (char === currentChar) {
      count += 1;
    } else {
      newNum += count;
      newNum += currentChar;
      count = 1;
      currentChar = char;
    }
  }

  return newNum;
};

const getLookAndSaySequence = (seed: string, noOfTerms: number) => {
  const sequence = [seed];

  while (sequence.length < noOfTerms) {
    sequence.push(getNextLookAndSayTerm(sequence.at(-1)));
  }

  return sequence;
};

export const lookAndSayPage: Page = {
  name: "Look-and-Say",
  markup: [
    ["h2", {}, "Look-and-Say Sequence"],
    [
      "p",
      {},
      "If you don't know what the Look-and-Say Sequence is (although I think the name rather gives it away), I don't want to spoil it. Just play around a bit and see what you find.",
    ],
    ["label", { for: "seed" }, "Start: "],
    ["input", { type: "number", id: "seed", value: 1, min: 0 }],
    ["label", { for: "terms" }, "Number of terms: "],
    ["input", { type: "number", id: "terms", value: 5, min: 1 }],
    ["h3", {}, "Output"],
    ["div", { id: "output" }],
  ],
  inputs: ["seed", "terms"],
  update: () => {
    const seed = <HTMLInputElement>document.getElementById("seed");
    const terms = <HTMLInputElement>document.getElementById("terms");
    const result = getLookAndSaySequence(seed.value, parseInt(terms.value));

    document.getElementById("output").textContent = result.join(", ");
  },
};
