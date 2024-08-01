import React from "react";
import { Registration } from "../../features/RegisterSystem/Registration";
import styles from "./RegistrationPage.module.scss";

export const RegisterPage: React.FC = () => {
  return (
    <div className={`${styles.root}`}>
      <Registration />
    </div>
  );
};
