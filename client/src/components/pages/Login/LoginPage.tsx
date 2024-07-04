import React from "react";
import { LoginSystem } from "../../features/LoginSystem/LoginSystem";
import { CheckLogin } from "../../features/LoginSystem/CheckLogin";

export const LoginPage: React.FC = () => {
  return (
    <div>
      <LoginSystem />
      <CheckLogin />
    </div>
  );
};
