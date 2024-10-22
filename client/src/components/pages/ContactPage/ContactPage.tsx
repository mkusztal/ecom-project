import React from "react";
import { Contact } from "../../features/Contact/Contact";
import styles from "./ContactPage.module.scss";
import { Container } from "react-bootstrap";

export const ContactPage: React.FC = () => {
  return (
    <Container className={`${styles.root}`}>
      <Contact />
    </Container>
  );
};
