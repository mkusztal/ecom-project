import React from "react";
import { LoginSystem } from "../../features/LoginSystem/LoginSystem";
import { CheckLogin } from "../../features/LoginSystem/CheckLogin";
import styles from "./LoginPage.module.scss";
import { Container } from "react-bootstrap";

export const LoginPage: React.FC = (props) => {
  return (
    <Container className={`${styles.root}`}>
      <LoginSystem />
      <CheckLogin />
    </Container>
  );
};
