import { Slide } from "../../components/Slide";
import { Profile } from "../../data/data";
import styles from "./about.module.css";

export const About = () => {
  return (
    <div id="about" className={styles["about"]}>
      <h1 className={styles["about--title"]}>Sobre</h1>
      <p className={styles["about--text"]}>{Profile[0].about}</p>
      <Slide />
    </div>
  );
};
