import React, { useContext } from "react";
import { useNavigate } from "react-router";
import AlbumContainer from "../components/AlbumsContainer/AlbumsContainer";
import ArtistsContainer from "../components/ArtistContainer/ArtistsContainer";
import GenresContainer from "../components/GenresContainer/GenresContainer";
import Menu from "../components/Menu/Menu";
import PlaylistContainer from "../components/PlaylistContainer/PlaylistContainer";
/* import TracksContainer from "../components/TracksContainer/TracksContainer"; */
import { LoginContext } from "../context";
import Navbar from "../components/Navbar";
import { Button } from "@mui/material";

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
      </div>
      <Navbar />
      <div className="btn">
        <Button variant="contained" className="button_top" onClick={onLogout}>
          logout
        </Button>
      </div>
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
