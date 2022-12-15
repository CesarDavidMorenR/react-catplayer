import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import Menu from "../components/Menu/Menu";
import PlaylistContainer from "../components/PlaylistContainer/PlaylistContainer";
/* import TracksContainer from "../components/TracksContainer/TracksContainer"; */
import { LoginContext } from "../context";
import SeachContainer from "./SearchContainer";
import AlbumContainer from "../components/AlbumsContainer/AlbumsContainer";
import ArtistsContainer from "../components/ArtistContainer/ArtistsContainer";
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
  const [search, setSearch] = useState(false);
  return (
    <>
      <header>
        <img
          className="logo"
          src="https://res.cloudinary.com/dcfivdjx9/image/upload/v1670922661/catplayer_logo_iggwv1.png"
          alt="cat player"
        />
      </header>
      <h1>HomePage</h1>
      <PlaylistContainer />
      <AlbumContainer />
      {/* <TracksContainer/> */}
      <ArtistsContainer />
      <div className="container-user">
        <h1 className="welcome-user">
          {email ? `Welcome back, ${email.username}` : null}
        </h1>
      </div>
      <div>
        <button onClick={() => setSearch(!search)}>Start to search</button>
        {search && <Navbar />}
      </div>

      <h1>WELCOME USER</h1>
      <SeachContainer />
      <Menu />
    </>
  );
};

export default Homepage;
