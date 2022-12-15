import React from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../../context/LoginContext";

import useFetchApi from "./../../../API/useFetchApi";
const Login = () => {


  const {login} = useAuthContext();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { users } = useFetchApi();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const userExist = users.map((user) => {
      if (user.email === data.email && user.password === data.password) {
        localStorage.setItem("email", JSON.stringify(user.email));
        localStorage.setItem("name", JSON.stringify(user.first_name));
        login();
        return true;
      } else {
        return false;
      }
    });
    if (userExist.includes(true)) {
      console.log(" You Are Successfully Logged In");
      navigate("/Homepage");
    
    } else {
      navigate("/");
      console.log("Email or Password is not matching with our record");
    }
  };

  return (
    <>
      <p className="title">Login Form</p>

      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && (
          <span style={{ color: "red" }}>*Email* is mandatory </span>
        )}
        <input type="password" {...register("password")} />
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
};

export default Login;
