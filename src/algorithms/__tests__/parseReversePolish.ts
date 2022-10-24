import { describe, expect, test } from "@jest/globals";

import { parseReversePolish } from "../parseReversePolish";

describe("parseReversePolish()", () => {
  test("works with two single digits", () => {
    expect(parseReversePolish("4 2 +")).toBe("6");
    expect(parseReversePolish("4 2 -")).toBe("2");
    expect(parseReversePolish("4 2 /")).toBe("2");
    expect(parseReversePolish("4 2 *")).toBe("8");
    expect(parseReversePolish("4 2 ^")).toBe("16");
  });
  test("works with bigger numbers", () => {
    expect(parseReversePolish("112 16 +")).toBe("128");
    expect(parseReversePolish("112 16 -")).toBe("96");
    expect(parseReversePolish("112 16 /")).toBe("7");
    expect(parseReversePolish("112 16 *")).toBe("1792");
    expect(parseReversePolish("26 2 ^")).toBe("676");
  });
  test("works with negative numbers", () => {
    // Addition
    expect(parseReversePolish("4 -2 +")).toBe("2");
    expect(parseReversePolish("-4 2 +")).toBe("-2");
    expect(parseReversePolish("-4 -2 +")).toBe("-6");
    expect(parseReversePolish("-112 16 +")).toBe("-96");
    // Subtraction
    expect(parseReversePolish("4 -2 -")).toBe("6");
    expect(parseReversePolish("-4 2 -")).toBe("-6");
    expect(parseReversePolish("-4 -2 -")).toBe("-2");
    // Division
    expect(parseReversePolish("4 -2 /")).toBe("-2");
    expect(parseReversePolish("-4 2 /")).toBe("-2");
    expect(parseReversePolish("-4 -2 /")).toBe("2");
    // Multiplication
    expect(parseReversePolish("4 -2 *")).toBe("-8");
    expect(parseReversePolish("-4 2 *")).toBe("-8");
    expect(parseReversePolish("-4 -2 *")).toBe("8");
  });
  test("can cope with multiple operations", () => {
    expect(parseReversePolish("1 2 3 + *")).toBe("5");
    expect(parseReversePolish("1 2 + 3 *")).toBe("9");
    expect(parseReversePolish("1 2 / 3 ^ 4 -")).toBe("4");
    expect(parseReversePolish("1 2 + 3 4 + *")).toBe("21");
    expect(parseReversePolish("7 8 3 2 ^ * 4 + +")).toBe("83");
  });
  test("can identify invalid expressions", () => {
    expect(parseReversePolish("3 a +")).toBe("Invalid input");
    expect(parseReversePolish("3 2 1 +")).toBe("Invalid input");
    expect(parseReversePolish("3 2 1 + + +")).toBe("Invalid input");
  });
});
