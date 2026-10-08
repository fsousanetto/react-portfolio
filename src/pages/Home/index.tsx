import { LinkButton } from "../../components/LinkButton";
import { Typewriter } from "../../components/Typewriter";
import { barsData } from "../../data/bars";
import { HomeLink, Profile } from "../../data/data";
import style from "./home.module.css";

export const Home = () => {
  return (
    <>
      <div id="home" className={style["grid--container"]}>
        <div className={style["grid"]}>
          <div className={style["grid--left"]}>
            <div id={style["bars"]}>
              {barsData.map((group) => (
                <div className={style["bars"]} key={group.id}>
                  {group.items.map((item) => (
                    <div
                      className={`${style["bar"]} ${item.className}`}
                      key={item.id}
                    >
                      <img src={item.image} alt={item.alt} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className={style["texts--container"]}>
              <h1 id="home" className={style["home--title"]}>
                {Profile[0].name}
              </h1>

              <p className={style["home--text"]}>
                <Typewriter words={Profile[0]?.profession} />
              </p>
              <p className={style["home--text"]}>{Profile[0]?.description}</p>
            </div>

            <div id={style["bars"]}>
              {barsData.map((group) => (
                <div className={style["bars"]} key={group.id}>
                  {group.items.map((item) => (
                    <div
                      className={`${style["bar"]} ${item.className}`}
                      key={item.id}
                    >
                      <img src={item.image} alt={item.alt} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className={style["grid--right"]}>
            <img
              className={style["home--avatar"]}
              src={Profile[0].avatar}
              alt={Profile[0].name}
            />
            <LinkButton
              githubUrl={HomeLink[0].githubUrl}
              socialUrl={HomeLink[0].socialUrl}
              whatsappUrl={HomeLink[0].whatsappUrl}
            />
          </div>
        </div>
      </div>
    </>
  );
};
