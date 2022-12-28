import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dr. Mays Aljbory</title>
        <meta
          name="description"
          content="اساعدك لتغيير حياتك الى نمط حياة صحيه اكثر بدون جوع وحرمان . تخلص من الخمول والتعب وقلة النشاط والسمنه واستعيد زمام حياتك ."
        />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
