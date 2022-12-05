import React, { useEffect, useReducer, useState } from "react";

import { fetchUser } from "../../API/fetchUser";
import { LoginReducer } from "../../context/LoginReducer";
import { FetchUser } from "../API/FetchUser";




const Login = () => {
  const [users, setUsers] = useState([]);
  const urlUser = " http://localhost:8000/user";

  useEffect(() => {
    const connection = async () => {
      const result = await FetchUser(urlUser);
      setUsers(result);
      // console.log(result);
    };
    connection();
  }, [urlUser]);

  const [albuns, setAlbus] = useState([]);
  const urlAlbum = " http://localhost:8000/albums";

  useEffect(() => {
    const connection = async () => {
      const result = await FetchUser(urlAlbum);
      setAlbus(result);
      console.log(result);
    };
    connection();
  }, [urlAlbum]);

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
      if (
        user.email === updatedState.email &&
        user.password === updatedState.password
      ) {
        return dispatch({ type: "SUCCESS" });
      } else {
        return dispatch({ type: "ERROR" });
      }
    });
  };

  const [recover, setRecover] = useState([]);

  // console.log(recover);

  const showPassword = (e) => {
    e.preventDefault();
    users.map((user) => {
      if (user.email === recover) {
        const pass = user.password;
        swal({
          title: pass,
        });
      } else {
      }
    });
  };

  const [album, setAlbum] = useState([]);

  const showAlbum = (e) => {
    e.preventDefault();
    const albu = albuns[0];
    albu.map((user) => {
      console.log(user);
      if (user.name === album) {
        console.log(user.id);
        const pass = user.id;
           swal({
             title: user.imageUrl,

           });
      } else {
      }
    });
  };



<<<<<<< HEAD:src/components/Form/Login.jsx
=======
  /* const userExist = users.map((user) => {
      if (
        user.email === updatedState.email &&
        user.password === updatedState.password
      ) {
        return true;
      } else {
        return false;
      }
    });
    if (userExist.includes(true)) {
      Login(updatedState.email && updatedState.password);
      dispatch({ type: "SUCCESS" });
      console.log("successfully");
    } else {
      dispatch({ type: "ERROR" });
      console.log("unsuccessful");
    }
  };
 */
>>>>>>> david:src/components/Login.jsx
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
        <div>
          <form onSubmit={handleForm}>
            <p style={{ color: "red" }}>{updatedState.error}</p>
            <input
              value={updatedState.email}
              onChange={(e) =>
                dispatch({ type: "EMAIL", value: e.target.value })
              }
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

          <form onSubmit={showPassword}>
            <input
              onChange={(e) => setRecover(e.target.value)}
              type="email"
              placeholder="enter your email"
              name="email"
            />
            <button>Recover Password</button>
          </form>

          <form onSubmit={showAlbum}>
            <input
              onChange={(e) => setAlbum(e.target.value)}
              type="text"
              placeholder="enter your email"
              name="text"
            />
            <button>Recover Password</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
