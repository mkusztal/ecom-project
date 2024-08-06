import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/userReducer";
import { jwtDecode, JwtPayload } from "jwt-decode";

export const CheckLogin: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode<JwtPayload & { email: string }>(token);
      if (decodedToken.exp && decodedToken.exp * 1000 > Date.now()) {
        dispatch(logIn({ email: decodedToken.email, token }));
      } else {
        localStorage.removeItem("token");
      }
    }
  }, [dispatch]);

  return null;
};
