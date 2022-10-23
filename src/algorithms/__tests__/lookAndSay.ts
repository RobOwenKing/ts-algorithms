import { describe, expect, test } from "@jest/globals";

import { getNextLookAndSayTerm, getLookAndSaySequence } from "../lookAndSay";

describe("getNextLookAndSayTerm()", () => {
  test("works with single digits", () => {
    expect(getNextLookAndSayTerm("0")).toBe("10");
    expect(getNextLookAndSayTerm("1")).toBe("11");
    expect(getNextLookAndSayTerm("4")).toBe("14");
  });
  test("works with simple strings of digits", () => {
    expect(getNextLookAndSayTerm("01")).toBe("1011");
    expect(getNextLookAndSayTerm("10")).toBe("1110");
    expect(getNextLookAndSayTerm("234")).toBe("121314");
  });
  test("works with complex strings of digits", () => {
    expect(getNextLookAndSayTerm("00")).toBe("20");
    expect(getNextLookAndSayTerm("22")).toBe("22");
    expect(getNextLookAndSayTerm("2222")).toBe("42");
    expect(getNextLookAndSayTerm("0001000")).toBe("301130");
  });
});

describe("getLookAndSaySequence()", () => {
  test("returns correct number of terms", () => {
    expect(getLookAndSaySequence("0", 1).length).toBe(1);
    expect(getLookAndSaySequence("0", 2).length).toBe(2);
    expect(getLookAndSaySequence("0", 5).length).toBe(5);
  });
});
