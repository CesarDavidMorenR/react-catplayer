import React from "react";

import Login from "../components/Form/Login/Login";
import Register from "../components/Form/Register/Register";

import "./../assets/style/LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <div>
        <h1>CatPlayer</h1>
        <div className="button__loginPage">
          <Register />
          <Login />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
