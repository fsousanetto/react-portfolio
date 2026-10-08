import styles from "./Contact.module.css";
import { ContactData } from "../../data/data";
import { Button } from "../../components/Button";
import { FaPhone } from "react-icons/fa";
import { RiMailSendFill, RiMapPinFill } from "react-icons/ri";

export const Contact = () => {
  return (
    <section id="contact">
      <h1 className={styles["contact--title"]}>{ContactData[0]?.title}</h1>
      <div className={styles["contact--container"]}>
        <div className={styles["grid--left"]}>
          <p className={styles["contact--text"]}>{ContactData[0]?.text}</p>
          <div className={styles["contact--links"]}>
            <a
              className={styles["contact--link"]}
              href={`tel:${ContactData[0]?.phone}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={styles["contact--icon"]}>
                <FaPhone />
              </i>
              {ContactData[0]?.phone}
            </a>
            <a
              className={styles["contact--link"]}
              href={`mailto:${ContactData[0]?.email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={styles["contact--icon"]}>
                <RiMailSendFill />
              </i>
              {ContactData[0]?.email}
            </a>
            <a
              className={styles["contact--link"]}
              href={ContactData[0]?.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={styles["contact--icon"]}>
                <RiMapPinFill />
              </i>
              {ContactData[0]?.address}
            </a>
          </div>
        </div>
        <div className={styles["grid--right"]}>
          <div className={styles["form--container"]}>
            <form
              className={styles["form"]}
              action="https://formsubmit.co/franciscon238@gmail.com"
              method="POST"
            >
              <input
                className={styles["input"]}
                type="text"
                name="name"
                placeholder="Nome"
                required
              />
              <input
                className={styles["input"]}
                type="email"
                name="_replyto"
                placeholder="Email"
                required
              />
              <textarea
                className={styles["textarea"]}
                name="message"
                placeholder="Mensagem"
                required
              ></textarea>
              <Button text="Enviar" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
