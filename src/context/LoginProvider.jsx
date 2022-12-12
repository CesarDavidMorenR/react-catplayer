import React from "react";
import { types } from "./Types/Types";
import { useReducer } from "react";
import { LoginContext } from "./LoginContext";
import { LoginReducer } from "./LoginReducer";

export const LoginProvider = ({ children }) => {
  const init = () => {
    const email = JSON.parse(localStorage.getItem("email"));
    return {
      isLogged: !!email,
      email,
    };
  };

  const [authState, dispatch] = useReducer(LoginReducer, {}, init);

  const login = (email = "") => {
    const user = {
      email,
    };

    localStorage.setItem("email", JSON.stringify(email)); //show information
  

    dispatch({
      type: types.login,
      payload: user,
    });
  };

  const logout = () => {
    localStorage.removeItem("email");

    dispatch({
      type: types.logout,
    });
  };
  return (
    <LoginContext.Provider
      value={{
        ...authState,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};