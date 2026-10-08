import styles from "./card.module.css";

import type { CardProps } from "../../types/Card";
import { FaGithub, FaGlobe } from "react-icons/fa";

export const Card = ({
  title,
  description,
  img,
  tags,
  alt,
  repoUrl,
  liveUrl,
}: CardProps) => {
  return (
    <>
      <section className={styles["card--container"]}>
        <div className={styles["card"]}>
          <img className={styles["card--img"]} src={img} alt={alt} />

          <h2 className={styles["card--title"]}>{title}</h2>
          <p className={styles["card--text"]}>{description}</p>

          <div className={styles["card--tags"]}>
            {tags.map((tag: any) => (
              <span key={tag} className={styles["tag"]}>
                {tag}
              </span>
            ))}
          </div>
          <div className={styles["card--links"]}>
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} color="##36386b" />
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <FaGlobe size={24} color="##36386b" />
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
