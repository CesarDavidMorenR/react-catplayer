import React, { useContext } from "react";
import { useNavigate } from "react-router";
import AlbumContainer from "../components/AlbumsContainer/AlbumsContainer";
import ArtistsContainer from "../components/ArtistContainer/ArtistsContainer";
import GenresContainer from "../components/GenresContainer/GenresContainer";
import Menu from "../components/Menu/Menu";
import PlaylistContainer from "../components/PlaylistContainer/PlaylistContainer";
/* import TracksContainer from "../components/TracksContainer/TracksContainer"; */
import { LoginContext } from "../context";
import SearchContainer from "./SearchContainer";
import Navbar from "../components/Navbar";

const Homepage = () => {
  const { email, logout } = useContext(LoginContext);
  console.log(email);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();

    navigate("/", {
      replace: true,
    });
  };

  return (
    <>
      <div className="container-user">
        <h1 className="welcome-user">
          {email ? `Welcome back, ${email.username}` : null}
        </h1>
        <div className="btn">
          <button className="button_top" onClick={onLogout}>
            logout
          </button>
        </div>
      </div>
      <Navbar />
      <p>
        <strong>WELCOME</strong>
      </p>
      <Menu />

      <PlaylistContainer />
      <AlbumContainer />
      {/* <TracksContainer/> */}
      <ArtistsContainer />

      <GenresContainer />
    </>
  );
};

export default Homepage;
