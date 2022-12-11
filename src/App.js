import "./App.css";

import CatPlayer from "./Router/CatPlayer";
import { LoginProvider } from "./context/LoginProvider";


function App() {
  return (
    <>
<LoginProvider>
    <CatPlayer/>
    </LoginProvider>

    </>
  );
}
export default App;
