import type { FC, PropsWithChildren } from "react";

export const MdxLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-pink-100 bg-fixed">
      <main className="prose mx-auto min-h-screen w-full bg-white/70 p-8 backdrop-blur-sm lg:prose-xl lg:w-1/2">
        {children}
      </main>
    </div>
  );
};
