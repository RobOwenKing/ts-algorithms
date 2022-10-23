import { expect, test } from "@jest/globals";

import { getNextLookAndSayTerm } from "../lookAndSay";

test("works with single digits", () => {
  expect(getNextLookAndSayTerm("0")).toBe("10");
  expect(getNextLookAndSayTerm("1")).toBe("11");
  expect(getNextLookAndSayTerm("4")).toBe("14");
});
