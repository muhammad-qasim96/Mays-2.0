import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dr. Mays Aljbory</title>
        <meta
          name="description"
          content="اساعدك لتغيير حياتك الى نمط حياة صحيه اكثر بدون جوع وحرمان . تخلص من الخمول والتعب وقلة النشاط والسمنه واستعيد زمام حياتك ."
        />
        <link
          rel="icon"
          type="image/x-icon"
          href="https://de.cdn-website.com/e03de90437ae4dbc817e54b739183f2b/site_favicon_16_1662113805459.ico"
        />
      </Head>

      <main className="bg-darkBg">
        <Header />
        <section id="home" className="">
          <Hero />
        </section>

        <section id="about" className="">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Home;
