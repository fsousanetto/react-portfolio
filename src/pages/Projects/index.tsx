import { Card } from "../../components/Card";

import styles from "./projects.module.css";

import { data } from "../../data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const Projects = () => {
  return (
    <section id="projects" className={styles["projects"]}>
      <h2 className={styles["projects--title"]}>Projetos</h2>

      <div className={styles["projects--container"]}>
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>

      <div className={styles["projects--swiper"]}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1.2}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 12,
              centeredSlides: true,
            },
            475: {
              slidesPerView: 1.2,
              spaceBetween: 16,
              centeredSlides: true,
            },
            700: {
              slidesPerView: 1.7,
              spaceBetween: 18,
              centeredSlides: true,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Card {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
