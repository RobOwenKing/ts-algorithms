import { Data } from "./types";

import { arrayToCombinationsPage } from "./algorithms/arrayToCombinations";
import { balancedParenthesesPage } from "./algorithms/balancedParentheses";
import { lookAndSayPage } from "./algorithms/lookAndSay";

export const data: Data = {
  arrayToCombinations: arrayToCombinationsPage,
  balancedParentheses: balancedParenthesesPage,
  lookAndSay: lookAndSayPage,
  test: {
    name: "Test",
    markup: [["p", {}, "This is a test"]],
    inputs: [],
    update: () => {
      console.log("check");
    },
  },
};
