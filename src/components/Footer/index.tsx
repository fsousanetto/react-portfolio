import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.footer}>
      <p className={styles["footer--text"]}>
        © {currentYear} Francisco Netto. All rights reserved.
      </p>
    </footer>
  );
};
