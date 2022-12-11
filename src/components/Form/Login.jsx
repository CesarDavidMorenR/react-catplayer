import React from "react";
import { useContext, useReducer, useState, useEffect } from "react";
import { FetchUser } from "./../../API/FetchUser";
import { LoginContext, LoginReducer } from "../../context";
import { useNavigate } from "react-router-dom";




const initialLogin = {
  email: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

const Login = () => {
  const { login } = useContext(LoginContext);
  const [state, dispatch] = useReducer(LoginReducer, initialLogin);
  const { email, password, isLoading, error, isLoggedIn } = state;
  const [users, setUsers] = useState([]);

const url ='  http://localhost:8000/user';
useEffect(() => {
  const connection = async () => {
    const data = await FetchUser(url);
    setUsers(data);
  };
  connection();
}, [url]);


const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    const userExist = users.map((user) => {
      if (user.email === state.email) {
        return true;
      } else {
        return false;
      }
    });
    if (userExist.includes(true)) {
      navigate("/HomePage");
      console.log("successfully");
    } else {
      navigate("/");
      console.log("unsuccessful");
    }
  };



  return (
    <>
     <h2>Login</h2>

<input
  type="email"
  className="field_Login"
  placeholder="Your Email"
  name="email"
  value={email}
  onChange={(e) =>
    dispatch({
      type: "field",
      field: "email",
      value: e.target.value,
    })
  }
/>
<input
  type="password"
  className="field_Login"
  placeholder="Your password"
  name="password"
  value={password}
  onChange={(e) =>
    dispatch({
      type: "field",
      field: "password",
      value: e.target.value,
    })
  }
/>

<button onClick={onLogin} >
  login
</button>
    </>
  );
};

export default Login;
