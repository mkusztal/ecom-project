import React, { useEffect } from "react";
import styles from "./App.module.scss";
import { useDispatch } from "react-redux";
import { logIn } from "./redux/userReducer";
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
import { BasketPage } from "./components/pages/BasketPage/BasketPage";
// import AboutUsPage from "./components/pages/AboutUsPage/AboutUsPage";
import { ContactPage } from "./components/pages/ContactPage/ContactPage";
import { NotFound } from "./components/pages/NotFound/NotFound";
import { ScrollProgressBar } from "./components/layout/ScrollProgressBar/ScrollProgressBar";

const App: React.FC = () => {
  const dispatch = useDispatch();
  // const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode<IDecodedToken>(token);
      dispatch(logIn({ email: decodedToken.email, token }));
    }
  }, [dispatch]);

  // const noNavbarFooterRoutes = ["/yerbamate/:id"];
  // const showNavbarFooter = !noNavbarFooterRoutes.includes(location.pathname);

  return (
    <div className={styles.root}>
      <ScrollProgressBar />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yerbamate" element={<YerbamatePage />} />
        <Route path="/yerbamate/:id" element={<ProductPage />} />
        {/* <Route path="/aboutus" element={<AboutUsPage />} /> */}
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
