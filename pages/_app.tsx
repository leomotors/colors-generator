import "dracula-prism/dist/css/dracula-prism.min.css";

import "$styles/globals.scss";

import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="Just a colors generator" />
        <link rel="icon" href="rgb.webp" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
