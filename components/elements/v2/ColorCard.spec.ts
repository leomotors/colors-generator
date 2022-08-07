import { mapFields } from "./ColorCard";
import { describe, expect, it } from "vitest";

describe("Color Card V2", () => {
  it("mapFields Function", () => {
    expect(mapFields(50, [0, 100], [0, 200])).toBe(100);
    expect(mapFields(300, [0, 1000], [0, 100])).toBe(30);
    expect(mapFields(0, [0, 255], [0, 511])).toBe(0);
    expect(mapFields(255, [0, 255], [0, 511])).toBe(511);
  });
});
