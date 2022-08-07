import { colorToCSS, mapFields } from "./ColorCard";
import { describe, expect, it } from "vitest";

describe("Color Card V2", () => {
  it("mapFields function", () => {
    expect(mapFields(50, [0, 100], [0, 200])).toBe(100);
    expect(mapFields(300, [0, 1000], [0, 100])).toBe(30);
    expect(mapFields(0, [0, 255], [0, 511])).toBe(0);
    expect(mapFields(255, [0, 255], [0, 511])).toBe(511);
  });

  it("colorToCSS function", () => {
    expect(colorToCSS({ type: "rgb", red: 69, blue: 69, green: 69 })).toBe(
      "rgba(69,69,69,1)"
    );
    expect(
      colorToCSS({ type: "hsl", hue: 69, saturation: 69, lightness: 69 })
    ).toBe("hsla(69,69,69,1)");
  });
});
