import React from "react";
import styles from "./TechnologiesCarousel.module.scss";
import { TechnologyData } from "./TechnologyData";

export const TechnologiesCarousel: React.FC = () => {
  return (
    <section className={styles.root}>
      <div className={styles.marquee}>
        <div className={styles.marquee_inner}>
          <span>
            {TechnologyData ? (
              TechnologyData.map((technology, index) => {
                return (
                  <div className={styles.orb} key={index}>
                    <img
                      src={technology.image}
                      alt='technology'
                      className={styles.image}
                    />
                  </div>
                );
              })
            ) : (
              <div></div>
            )}
            {TechnologyData ? (
              TechnologyData.map((technology, index) => {
                return (
                  <div className={styles.orb} key={index}>
                    <img
                      src={technology.image}
                      alt='technology'
                      className={styles.image}
                    />
                  </div>
                );
              })
            ) : (
              <div></div>
            )}
          </span>
        </div>
      </div>
    </section>
  );
};
