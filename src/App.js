import "./App.css";
import { LoginProvider } from "./context/LoginProvider";

import CatPlayer from "./Router/CatPlayer";

function App() {
  return (
    <>
      <LoginProvider>
        <CatPlayer />
      </LoginProvider>
    </>
  );
}
export default App;
