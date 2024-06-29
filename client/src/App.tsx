import React from "react";
import styles from "./App.module.scss";
import { HomePage } from "./components/pages/HomePage/HomePage";
import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/layout/NavigationBar/NavigationBar";
import { Footer } from "./components/layout/Footer/Footer";
import { RegisterPage } from "./components/pages/Register/RegisterPage";
import { LoginPage } from "./components/pages/Login/LoginPage";

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
