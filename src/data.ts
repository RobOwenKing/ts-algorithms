import { Data } from "./types";
import { lookAndSayPage } from "./algorithms/lookAndSay";

export const data: Data = {
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
