import { useState, useEffect } from "react";
import styles from "./Typewriter.module.css";

interface TypewriterProps {
  words: string[];
  speed?: number;
  delay?: number;
}

export const Typewriter = ({
  words,
  speed = 150,
  delay = 2000,
}: TypewriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const fullText = words[currentWordIndex];

    const typingSpeed = isDeleting ? speed / 2 : speed;

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1);

        setCurrentText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay]);

  return (
    <span>
      {currentText}
      <span className={styles["blinking-cursor"]}>|</span>
    </span>
  );
};
