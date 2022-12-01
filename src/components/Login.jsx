import React, { useEffect, useReducer, useState } from "react";
import { fetchUser } from "../API/fetchUser";
import { LoginReducer } from "../context/LoginReducer";

const Login = () => {
  const [users, setUsers] = useState([]);
  const urlUser = " http://localhost:8000/user";

  useEffect(() => {
    const connection = async () => {
      const result = await fetchUser(urlUser);
      setUsers(result);
      console.log(result);
    };
    connection();
  }, [urlUser]);

  //initial state
  const initialState = {
    email: "",
    password: "",
    isLoggedin: false,
    error: false,
  };

  //call LoginReducer
  const [updatedState, dispatch] = useReducer(LoginReducer, initialState);

  const handleForm = (e) => {
    e.preventDefault();
     users.map((user) => {

      if (user.email === updatedState.email && user.password ===updatedState.password ){
        dispatch({ type: "SUCCESS" });
       }else{
        dispatch({ type: "ERROR" });
       }
    })
  }



  return (
    <>
      {updatedState.isLoggedin ? (
        <div>
          <h1>successfully logged in {updatedState.email}</h1>
          <button
            onClick={() => {
              dispatch({ type: "LOGOUT" });
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <form onSubmit={handleForm}>
          <p style={{ color: "red" }}>{updatedState.error}</p>


          <input
            value={updatedState.email}
            onChange={(e) => dispatch({ type: "EMAIL", value: e.target.value })}
            type="email"
            placeholder="enter your email"
            name="email"
          />
          <input
            value={updatedState.password}
            onChange={(e) =>
              dispatch({ type: "PASSWORD", value: e.target.value })
            }
            type="Password"
            placeholder="password"
            name="password"
          />
          <button>Submit</button>
        </form>
      )}
    </>
  );
};

export default Login;
