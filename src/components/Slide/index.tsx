import { SlideData } from "../../data/data";
import style from "./Slide.module.scss";

export const Slide = () => {
  const slide = SlideData;

  return (
    <section className={style["slide"]}>
      <div className={style["slide--container"]}>
        <div
          id={style["slide--track--infinite"]}
          className={style["slide--track"]}
        >
          <div className={style["slide--barrier"]}>
            <ul className={style["slide--list"]}>
              {slide.map((item) => (
                <li key={item.id} className={style["slide--item"]}>
                  <img src={item.url} alt="Slide" />
                </li>
              ))}
              {slide.map((item) => (
                <li key={`${item.id}-clone`} className={style["slide--item"]}>
                  <img src={item.url} alt="Slide" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
