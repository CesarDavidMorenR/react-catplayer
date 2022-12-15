import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./Login.css";
import useFetchApi from "../../../API/useFetchApi";

const Login = () => {
  const { users } = useFetchApi();
  const navigate = useNavigate();

  const onSubmit = (data) => {};

  return (
    <>
      <a href="#modal-opened" className="link-1" id="modal-closed">
        LOGIN
      </a>

      <div className="modal-container" id="modal-opened">
        <div className="modal">
          <div classNameName="login-card">
            <div className="login-form">
              <input type="email" placeholder="Your Email" name="email" />
              <input
                type="password"
                placeholder="Your password"
                name="password"
              />
              <a href="#">Forgot your password ?</a>
            </div>
          </div>

          <button className="modal__btn">LOGIN &rarr;</button>

          <a href="#modal-closed" className="link-2"></a>
        </div>
      </div>
    </>
  );
};

export default Login;
