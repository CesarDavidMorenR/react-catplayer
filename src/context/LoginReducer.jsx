

export const LoginReducer = (state,action) =>{
    
    switch (action.type) {
      case "SUCCESS":
        return {
          ...state,
          isLoggedin: true,
          email: "",
          password: "",
        };
      case "RECOVER":
        return {
          ...state,
          //   isLoggedin: true,
          email: action.value,
            recover: "SDSD",
          
        };
      case "ERROR":
        return {
          ...state,
          error: "WRONG EMAIL OR PASSWORD",
        };
      case "LOGOUT":
        return {
          ...state,
          error: false,
          isLoggedin: false,
        };
      case "EMAIL":
        return {
          ...state,
          email: action.value,
        };
      case "PASSWORD":
        return {
          ...state,
          password: action.value,
        };
      default:
        return state;
    }
}





