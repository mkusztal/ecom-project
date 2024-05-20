import React from "react";
import styles from "./App.module.scss";
import { HomePage } from "./components/pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/layout/NavigationBar/NavigationBar";
import { Footer } from "./components/layout/Footer/Footer";

const App: React.FC = () => {
  return (
    <div className={styles.root}>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
