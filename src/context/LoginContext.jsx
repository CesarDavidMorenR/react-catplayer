import React, { createContext } from 'react'

const LoginContext = createContext({
  user:{},
  login: () => {}
})

export default LoginContext