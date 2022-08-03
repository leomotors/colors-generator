import type { IColorResponse } from "$lib/colors";

import type { FC } from "react";

interface ColorCardProps {
  color: IColorResponse;
}

function colorToCSS(res: IColorResponse) {
  if (res.type == "rgb") {
    return `rgb(${res.red}, ${res.green}, ${res.blue})`;
  } else if (res.type == "hsl") {
    return `hsl(${res.hue}, ${res.saturation}%, ${res.lightness}%)`;
  } else {
    throw new Error("Unknown color type");
  }
}

export const ColorCard: FC<ColorCardProps> = ({ color }) => {
  return (
    <div className="m-4 flex flex-col items-center rounded-xl bg-gradient-to-br from-blue-50 to-pink-50 p-4 shadow-lg">
      <div
        className="h-32 w-32 rounded-full border border-black"
        style={{ backgroundColor: colorToCSS(color) }}
      />

      <p>{color.type}</p>
      {Object.entries(color).map(([key, val]) => {
        if (key == "type") return null;

        return (
          <p key={`color-card-${key}`}>
            {key}: {val}
          </p>
        );
      })}
    </div>
  );
};
