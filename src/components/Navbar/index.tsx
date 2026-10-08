import { useState } from "react";
import type { Menus } from "../../types/Menus";
import menusData from "../../menus.json";

import styles from "./navbar.module.scss";
import { BiMenu } from "react-icons/bi";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menus = menusData as Menus[];

  const toggled = () => {
    setToggle((prev) => !prev);
  };

  return (
    <section id={"navbar"} className={styles["navbar--section"]}>
      <div className={styles["wrapper--container"]}>
        <div className={styles["wrapper"]}>
          <div className={styles["nav--left"]}>
            <h3 className={styles["nav--title"]}>Francisco Moreira</h3>
          </div>

          <div
            className={`${styles["main--menu"]} ${toggle ? styles["main--menu--open"] : ""}`}
          >
            <ul>
              {menus.map((item, index) => (
                <li className={styles["navbar--li"]} key={index}>
                  <a
                    className={styles["a"]}
                    href={item.to}
                    onClick={() => setToggle(false)}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles["btn"]}>
            <button className={styles["toggle--btn"]} onClick={toggled}>
              <BiMenu />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
