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

    fetch(`${API_URL}api/logout`, options).then(() => {
      dispatch(logOut());
      navigate("/");
    }, dispatch);
  }, [dispatch, navigate]);

  return null;
};
