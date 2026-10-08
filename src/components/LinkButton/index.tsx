import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import styles from "./button.module.css";
import type { HomeLinks } from "../../types/HomeLinks";

export const LinkButton = (props: HomeLinks) => {
  return (
    <div className={styles["card--links"]}>
      {props.githubUrl && (
        <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} color="##36386b" />
        </a>
      )}
      {props.socialUrl && (
        <a href={props.socialUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} color="##36386b" />
        </a>
      )}
      {props.whatsappUrl && (
        <a href={props.whatsappUrl} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={24} color="##36386b" />
        </a>
      )}
    </div>
  );
};
