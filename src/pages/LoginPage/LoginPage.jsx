import React from "react";

import Login from "../../components/Form/Login/Login";
import Register from "../../components/Form/Register/Register"; 

/* import "./../assets/style/LoginPage.css"; */


const LoginPage = () => {
  return (
    <>
      <h1>CatPlayer</h1>
      <div>
        {/*    <Register />  */}
        <Login/>
      </div>
    </>
  );
};

export default LoginPage;
