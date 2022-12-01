import React, { useState } from 'react'
import LoginContext from './LoginContext';


const LoginProvider = ({children}) => {
    const [user,SetUser] = useState(null);



function loggedin(user,e){
    e.preventDefault();
    if(user.email === 'mimika' && user.password === '123'){
        SetUser(user);
    }
}




const value ={
    user,
    loggedin
}

  return (
 <LoginContext.Provider value={value}>
    {children}

 </LoginContext.Provider>
  )
}

export default LoginProvider