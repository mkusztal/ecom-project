import React from "react";
import { LoginSystem } from "../../features/LoginSystem/LoginSystem";
import { CheckLogin } from "../../features/LoginSystem/CheckLogin";
import styles from "./LoginPage.module.scss";

export const LoginPage: React.FC = () => {
  return (
    <div className={`${styles.root}`}>
      <LoginSystem />
      <CheckLogin />
    </div>
  );
};
