import Head from "next/head";

import type { FC, PropsWithChildren } from "react";

interface MdxLayoutProps extends PropsWithChildren {
  title: string;
}

export const MdxLayout: FC<MdxLayoutProps> = ({ children, title }) => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-pink-100 bg-fixed">
      <Head>
        <title>{title}</title>
      </Head>

      <main className="prose mx-auto min-h-screen w-full bg-white/70 p-8 backdrop-blur-sm lg:prose-xl lg:w-1/2">
        {children}
      </main>
    </div>
  );
};
