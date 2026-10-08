import styles from "./Hero.module.scss";

import { Home } from "../Home";
import { About } from "../About";
import { Projects } from "../Projects";
import { Contact } from "../Contact";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export const Hero = () => {
  return (
    <>
      <Navbar />
      <section className={styles["hero--section"]}>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </section>
    </>
  );
};
