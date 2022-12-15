import "./App.css";
import { LoginContextProvider } from "./context/LoginContext";


import CatPlayer from "./Router/CatPlayer";

function App() {
  return (
    <>
      <LoginContextProvider>
        <CatPlayer />
        </LoginContextProvider>
     
    </>
  );
}
export default App;