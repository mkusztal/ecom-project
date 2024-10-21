import React, { useEffect } from "react";
import styles from "./ProductCarousel.module.scss";
import { IYerbamate } from "../../../interfaces/IYerbamate";
import { useDispatch, useSelector } from "react-redux";
import { fetchYerbamate, getYerbamate } from "../../../redux/yerbamateReducer";
import { Image } from "react-bootstrap";

export const ProductCarousel: React.FC = () => {
  const yerbamateData: IYerbamate[] = useSelector(getYerbamate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchYerbamate());
  }, [dispatch]);

  const allImages = Array.from(yerbamateData)
    .map((product) => product.image)
    .filter((image: string) => !!image && image.trim() !== "");

  return (
    <section className={styles.root}>
      <div className={styles.marquee}>
        <div className={styles.marquee_inner}>
          <span>
            {allImages ? (
              allImages.map((image, index) => {
                return (
                  <div className={styles.orb} key={index}>
                    <Image
                      src={`data:image/jpeg;base64,${image}`}
                      alt="example_product"
                      className={styles.image}
                    />
                  </div>
                );
              })
            ) : (
              <div>Not found</div>
            )}
            {allImages ? (
              allImages.map((image, index) => {
                return (
                  <div className={styles.orb} key={index}>
                    <Image
                      src={`data:image/jpeg;base64,${image}`}
                      alt="example_product"
                      className={styles.image}
                    />
                  </div>
                );
              })
            ) : (
              <div>Not found</div>
            )}
          </span>
        </div>
      </div>
    </section>
  );
};
