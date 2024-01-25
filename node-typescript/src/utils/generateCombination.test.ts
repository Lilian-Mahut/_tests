import generateCombination from "./generateCombination";

describe("generateCombination", () => {
  it("should generate empty array for empty input", () => {
    const actual = generateCombination([]);
    expect(actual).toEqual([]);
  });

  it("should generate one combination for one element input", () => {
    const actual = generateCombination(["c"]);
    expect(actual).toEqual(["c"]);
  });

  it("should generate all combinations for two element input", () => {
    const actual = generateCombination(["c", "n"]);
    expect(actual).toEqual(["c", "cn", "n"]);
  });

  it("should generate all combinations for three element input", () => {
    const actual = generateCombination(["c", "n", "s"]);
    expect(actual).toEqual(["c", "cn", "cns", "cs", "n", "ns", "s"]);
  });
});
