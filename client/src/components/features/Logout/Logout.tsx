import { API_URL } from "../../../config/urls";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../../redux/userReduces";
import React, { useEffect } from "react";

export const Logout: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const options: RequestInit = {
      method: "DELETE",
      credentials: "include",
    };

    fetch(`${API_URL}api/logout`, options)
      .then((res) => {
        if (res.ok) {
          localStorage.removeItem("token");
          dispatch(logOut());
          navigate("/");
        } else {
          console.error("Failed to log out");
        }
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  }, [dispatch, navigate]);

  return null;
};
