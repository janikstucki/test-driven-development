import { formatDuration } from "./duration";

describe("adding up numbers", () => {
  test("zero seconds are zero seconds", () => {
    expect(formatDuration(0)).toBe("0h0m0s");
  });
  test("123 seconds are 2m3s", () => {
    expect(formatDuration(123)).toBe("0h2m3s");
  });
  test("sum of number and its negative counterpart is zero", () => {
    expect(formatDuration(3999)).toBe("1h6m30s");
  });
});