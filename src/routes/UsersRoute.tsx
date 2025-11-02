import React from "react";
import { Route, Routes } from "react-router-dom";
import Page404 from "../pages/page404/Page404";
import LoginPage from "../pages/login/LoginPage";

const UsersRoute = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/register" element={<RegisterPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
        <Route path="/verify-login" element={<VerifyLoginPage />} /> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </React.Fragment>
  );
};

export default UsersRoute;
