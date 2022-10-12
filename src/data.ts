import { Data } from "./types";

import { balancedParenthesesPage } from "./algorithms/balancedParentheses";
import { lookAndSayPage } from "./algorithms/lookAndSay";

export const data: Data = {
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
