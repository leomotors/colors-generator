import { ColorCard } from "$components/elements/v2/ColorCard";
import type { IColorResponse } from "$lib/v2/colors";

import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { useState } from "react";

const Home: NextPage = () => {
  const [colors, setColors] = useState<IColorResponse[]>([]);

  async function handleGenerate() {
    const data = await fetch("/api/v2/colors").then((r) => r.json());
    setColors(data);
  }

  return (
    <main className="flex flex-col items-center gap-6 p-8">
      <Head>
        <title>Colors Generator V2</title>
      </Head>

      <h1 className="text-center text-6xl font-bold">Colors Generator</h1>

      <button
        className="rounded-2xl border border-green-400 bg-gradient-to-br from-green-200 to-green-300 p-4 text-3xl font-bold"
        onClick={handleGenerate}
      >
        Generate!
      </button>

      <h2 className="text-4xl font-bold">Colors</h2>

      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-3 lg:grid-cols-5">
        {colors.map((color, index) => (
          <ColorCard key={`color-card-v2-${index}`} color={color} />
        ))}
      </div>

      {colors.length ? null : <p>No Colors Yet</p>}

      <Link href="/">
        <a className="rounded-lg border border-blue-200 bg-blue-100 p-2 font-bold">
          Home Page
        </a>
      </Link>
    </main>
  );
};

export default Home;
