import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import useFetchApi from "../../../API/useFetchApi";
import { useLoginContext } from "../../../context/LoginContext";



const Login = () => {
 
  const { login } = useLoginContext();
  const { handleSubmit, control } = useForm();
  const { handleSubmit: handleSubmit2, control: control2, reset } = useForm();


  const [loginError, setLoginError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [newEmailError, setNewEmailError] = useState(false);




  const {users} = useFetchApi()
  const navigate = useNavigate();

  const onSubmit = (data) => {
    users.forEach((user) => {
      if (user.email === data.email && user.password === data.password) {
        localStorage.setItem("user", JSON.stringify(user.username));
        setLoginError(false);
        login();
      } else {
        setLoginError(true);
        setTimeout(() => {
          setLoginError(false);
        }, 3000);
      }
    });
  };

  return (
    <>
      <a href="#modal-opened" className="link-1" id="modal-closed">
        LOGIN
      </a>

      <div className="modal-container" id="modal-opened">
        <div className="modal">
          <div classNameName="login-card">
            <div className="login-form">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
              
                
              />
              <input
                type="password"
                placeholder="Your password"
                name="password"
               
              />
              <a href="#">Forgot your password ?</a>
            </div>
          </div>

          <button className="modal__btn" onClick={onSubmit}>
            LOGIN &rarr;
          </button>

          <a href="#modal-closed" className="link-2"></a>
        </div>
      </div>
    </>
  );
};

export default Login;
