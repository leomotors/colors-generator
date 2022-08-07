export interface IColorConversionDef<TF extends string[]> {
  to: "rgba" | "hsl";
  map: Record<TF[number], { to: string; range: [number, number] }>;
  default?: Record<string, number>;
}

export interface IColorDef<TF extends string[]> {
  type: string;
  fields: Record<TF[number], [number, number]>;
  conversion: IColorConversionDef<TF>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type IColorDefs = IColorDef<any>[];

export const ColorDefs: [
  IColorDef<["red" | "green" | "blue"]>,
  IColorDef<["hue" | "saturation" | "lightness"]>
] = [
  {
    type: "rgb",
    fields: {
      red: [0, 255],
      green: [0, 255],
      blue: [0, 255],
    },
    conversion: {
      to: "rgba",
      map: {
        red: { to: "red", range: [0, 255] },
        green: { to: "green", range: [0, 255] },
        blue: { to: "blue", range: [0, 255] },
      },
      default: {
        alpha: 1,
      },
    },
  },
  {
    type: "hsl",
    fields: {
      hue: [0, 360],
      saturation: [0, 100],
      lightness: [0, 100],
    },
    conversion: {
      to: "hsl",
      map: {
        hue: { to: "hue", range: [0, 360] },
        saturation: { to: "saturation", range: [0, 100] },
        lightness: { to: "lightness", range: [0, 100] },
      },
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
