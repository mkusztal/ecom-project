import React from "react";
import { Registration } from "../../features/RegisterSystem/Registration";
import styles from "./RegistrationPage.module.scss";
import { Container } from "react-bootstrap";

export const RegisterPage: React.FC = () => {
  return (
    <Container className={`${styles.root}`}>
      <Registration />
    </Container>
  );
};
