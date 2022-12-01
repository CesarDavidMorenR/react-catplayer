
import Login from './components/Login';
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
  import { BrowserRouter, Routes, Route} from "react-router-dom";
// import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<PublicRoute />}> */}
            <Route index element={<LoginPage />} />
             <Route path="/login" element={< Login />} />
            {/*<Route path="/favs" element={<FavsPage />} />
            <Route path="/product/:title" element={<ProductPage />} />
            <Route path="*" element={<ErrorPage />} /> */}
          {/* </Route>
          <Route path="/private" element={<PrivateRoute />}>
            <Route index element={<MainPage />} />
            <Route path="/private/checkout" element={<CheckoutPage />} />
            <Route path="/private/logout" element={<Logout />} />
            <Route path="/private/favs" element={<FavsPage />} />
            <Route path="/private/product/:title" element={<ProductPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route> */}
        </Routes>
      </BrowserRouter>

    </>
  );
}
export default App;
