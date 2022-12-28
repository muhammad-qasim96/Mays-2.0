import type { NextPage } from "next";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-darkBg">
      <Header />

      <Hero />

      <About />

      <Blog />

      <Contact />
    </div>
  );
};

export default Home;
