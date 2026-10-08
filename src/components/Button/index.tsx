import styles from "./Button.module.css";

type ButtonProps = {
  text: string;
  type?: "button" | "submit" | "reset";
};

export const Button = ({ text, type }: ButtonProps) => {
  return (
    <button className={styles["button"]} type={type}>
      {text}
    </button>
  );
};
