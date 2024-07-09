import React from "react";
import { Contact } from "../../features/Contact/Contact";
import styles from "./ContactPage.module.scss";

export const ContactPage: React.FC = () => {
  return (
    <div className={`${styles.root}`}>
      <Contact />
    </div>
  );
};
