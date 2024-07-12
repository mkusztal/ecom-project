import React, { useEffect } from "react";
import styles from "./App.module.scss";
import { useDispatch } from "react-redux";
import { logIn } from "../src/redux/userReduces";
import { jwtDecode } from "jwt-decode";
import { IDecodedToken } from "./interfaces/IDecodedToken";
import { HomePage } from "./components/pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/layout/NavigationBar/NavigationBar";
import { Footer } from "./components/layout/Footer/Footer";
import { RegisterPage } from "./components/pages/Register/RegisterPage";
import { LoginPage } from "./components/pages/Login/LoginPage";
import { Logout } from "./components/features/Logout/Logout";
import { YerbamatePage } from "./components/pages/Products/YerbamatePage";
import { ProductPage } from "./components/pages/ProductPage/ProductPage";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode<IDecodedToken>(token);
      dispatch(logIn({ email: decodedToken.email, token }));
    }
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yerbamate" element={<YerbamatePage />} />
        <Route path="/yerbamate/:id" element={<ProductPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
