export interface IColorDef {
  type: string;
  fields: Record<string, [number, number]>;
}

export type IColorDefs = IColorDef[];

export const ColorDefs: IColorDefs = [
  {
    type: "rgb",
    fields: {
      red: [0, 255],
      green: [0, 255],
      blue: [0, 255],
    },
  },
  {
    type: "hsl",
    fields: {
      hue: [0, 360],
      saturation: [0, 100],
      lightness: [0, 100],
    },
  },
];

export type IColorResponse = { type: string } & { [key: string]: number };

export function GenerateColor(def: IColorDefs) {
  const targetType = def[Math.floor(Math.random() * def.length)];

  const payload: Record<string, unknown> = { type: targetType.type };

  for (const [type, range] of Object.entries(targetType.fields)) {
    const [min, max] = range;
    const value = Math.floor(Math.random() * (max - min)) + min;
    payload[type] = value;
  }

  return payload as IColorResponse;
}

export function GenerateColors(def: IColorDefs, count = 5) {
  const colors: Record<string, unknown>[] = [];
  for (let i = 0; i < count; i++) {
    colors.push(GenerateColor(def));
  }
  return colors as IColorResponse[];
}
