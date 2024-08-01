import React from "react";
import { Link } from "react-router-dom";
import styles from "./ContactInfo.module.scss";
import { Image } from "react-bootstrap";

export const ContactInfo = () => {
  return (
    <div className={`${styles.root}`}>
      <Image
        src="images/contact_info.jpg"
        alt="YerbaOfficial"
        className={styles.background}
      />
      <div className={`${styles.div_elements}`}>
        <p>Would you like to get more information?</p>
        <Link
          to={"/contact"}
          target="_blank"
          rel="noreferrer"
          className={styles.first_slide__link}
        >
          Contact us!
        </Link>
      </div>
    </div>
  );
};
