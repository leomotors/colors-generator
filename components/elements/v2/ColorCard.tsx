import { ColorDefs, IColorResponse } from "$lib/v2/colors";

import type { FC } from "react";

interface ColorCardProps {
  color: IColorResponse;
}

export function mapFields(
  value: number,
  from: [number, number],
  to: [number, number]
) {
  return ((value - from[0]) / (from[1] - from[0])) * (to[1] - to[0]) + to[0];
}

export function colorToCSS(res: IColorResponse) {
  const colorDef = ColorDefs.find((d) => d.type == res.type);

  if (!colorDef) {
    throw new Error(`Unknown Color Space recieved from API: ${res.type}`);
  }

  const mappedFields = {} as Record<string, number>;

  for (const [field, { to, range }] of Object.entries(
    colorDef.conversion.map
  )) {
    mappedFields[to] = mapFields(
      res[field],
      colorDef.fields[field as keyof typeof colorDef.fields],
      range
    );
  }

  for (const [field, value] of Object.entries(
    colorDef.conversion.default ?? {}
  )) {
    mappedFields[field] = value;
  }

  switch (colorDef.conversion.to) {
    case "rgba": {
      const { red, green, blue, alpha } = mappedFields;
      return `rgba(${red},${green},${blue},${alpha})`;
    }
    case "hsla": {
      const { hue, saturation, lightness, alpha } = mappedFields;
      return `hsla(${hue},${saturation},${lightness},${alpha})`;
    }
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
