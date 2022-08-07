import { ColorDefs, GenerateColors } from "$lib/v1/colors";

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(GenerateColors(ColorDefs));
}
