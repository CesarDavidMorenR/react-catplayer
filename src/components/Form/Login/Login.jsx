import React from 'react'

const Login = () => {
  return (
    <div>Login</div>
  )
}

export default Login
// import React, { useContext, useReducer, useState, useEffect } from "react";

// import { FetchUser } from "../../../API/fetchUser";
// import { LoginContext, LoginReducer } from "../../../context";
// import { useNavigate } from "react-router-dom";

// import "./Login.css";

// const initialLogin = {
//   email: "",
//   password: "",
//   isLoading: false,
//   error: "",
//   isLoggedIn: false,
// };

// const Login = () => {
//   const { login } = useContext(LoginContext);
//   console.log(login);

//   const [state, dispatch] = useReducer(LoginReducer, initialLogin);
//   const { email, password, isLoading, error, isLoggedIn } = state;
//   const [users, setUsers] = useState([]);

//   const url = "http://localhost:8000/user";

//   useEffect(() => {
//     const connection = async () => {
//       const data = await FetchUser(url);
//       setUsers(data);
//     };
//     connection();
//   }, [url]);

//   const navigate = useNavigate();

//   const onLogin = (e) => {
//     e.preventDefault();
//     const userExist = users.map((user) => {
//       if (user.email === state.email) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//     if (userExist.includes(true)) {
//       navigate("/HomePage");
//       console.log("successfully");
//     } else {
//       navigate("/");
//       console.log("unsuccessful");
//     }
//   };

//   return (
//     <>
//      {/* <header>
//       <img className="imgCat" src="https://res.cloudinary.com/dcfivdjx9/image/upload/v1670922661/catplayer_logo_iggwv1.png" alt="cat player"/>
//     </header> */}
//     {/* DARK OPTION */}
//     <header><h1>REACT 
//         CATPLAYER
//       </h1>

//       <img className="imgCat" src="https://res.cloudinary.com/dcfivdjx9/image/upload/v1670950770/Mi_proyecto_1_ikdpct.png" alt="cat player"/>
      
      
    
//     </header>
    
//       <a href="#modal-opened" className="link-1" id="modal-closed">
//         LOGIN
//       </a>
     
//       <div className="modal-container" id="modal-opened">
//         <div className="modal">
//           <div classNameName="login-card">
//             <div className="login-form">
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 name="email"
//                 value={email}
//                 onChange={(e) =>
//                   dispatch({
//                     type: "field",
//                     field: "email",
//                     value: e.target.value,
//                   })
//                 }
//               />
//               <input
//                 type="password"
//                 placeholder="Your password"
//                 name="password"
//                 value={password}
//                 onChange={(e) =>
//                   dispatch({
//                     type: "field",
//                     field: "password",
//                     value: e.target.value,
//                   })
//                 }
//               />
//               <a href="#">Forgot your password ?</a>
//             </div>
//           </div>

//           <button className="modal__btn" onClick={onLogin}>
//             LOGIN &rarr;
//           </button>

//           <a href="#modal-closed" className="link-2"></a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;
