import "./App.css";
import AlbumContainer from "./components/AlbumsComponent";
import PlaylistContainer from "./components/PlaylistComponent";
import TracksContainer from "./components/TracksComponent";
import UserContainer from "./components/UserComponent";
import Login from "./components/Login";
import ArtistsContainer from "./components/ArtistsContainer";
import GenresContainer from "./components/GenresContainer";
import ButtonGenre from "./components/ButtonGenre";


import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<PublicRoute />}> */}
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/a" element={<TracksContainer />} />
          <Route path="/b" element={<ArtistsContainer />} />
          <Route path="/c" element={<GenresContainer />} />

          <Route path="/d" element={<UserContainer />} />
          <Route path="/e" element={<PlaylistContainer />} />
          <Route path="/f" element={<AlbumContainer />} />
          <Route path="/b" element={<ButtonGenre />} />

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
