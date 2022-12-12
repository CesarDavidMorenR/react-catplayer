<<<<<<< HEAD
import React from "react";
=======
import React, { useContext } from "react";
import { useNavigate } from "react-router";
>>>>>>> 3d552cd3c2d6909f5ad56e890a48cafc22a1f4ae
import AlbumContainer from "../components/AlbumsContainer/AlbumsContainer";
import ArtistsContainer from "../components/ArtistContainer/ArtistsContainer";
import GenresContainer from "../components/GenresContainer/GenresContainer";
import Menu from "../components/Menu/Menu";
import PlaylistContainer from "../components/PlaylistContainer/PlaylistContainer";
import TracksContainer from "../components/TracksContainer/TracksContainer";
<<<<<<< HEAD
=======
import { LoginContext } from "../context";
>>>>>>> 3d552cd3c2d6909f5ad56e890a48cafc22a1f4ae

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
<<<<<<< HEAD
      <h1>HomePage</h1>
      <Menu />

=======
      <div className="container-user">
        <h1 className="welcome-user">
        {email ? `Welcome back, ${email.username}` : null}
        </h1>
        <div className="btn">
        <button className="button_top" onClick={onLogout}>logout</button>

        </div>
        </div>

      <h1>WELCOME USER</h1>
      <Menu />

>>>>>>> 3d552cd3c2d6909f5ad56e890a48cafc22a1f4ae
      <PlaylistContainer />
      <AlbumContainer />
      {/* <TracksContainer/> */}
      <ArtistsContainer />

      <GenresContainer />
    </>
  );
};

export default Homepage;
