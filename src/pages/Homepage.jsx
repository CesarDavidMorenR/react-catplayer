import React from 'react'
import AlbumContainer from '../components/AlbumsContainer/AlbumsContainer'
import ArtistsContainer from '../components/ArtistContainer/ArtistsContainer'
import GenresContainer from '../components/GenresContainer/GenresContainer'
import TracksContainer from '../components/TracksContainer/TracksContainer'
/* import Footer from './../components/Footer/Footer' */
import '../components/home/Home.css'
import { useContext } from "react";
import { useNavigate } from "react-router";
import Menu from "../components/Menu/Menu";
import PlaylistContainer from "../components/PlaylistContainer/PlaylistContainer";
/* import TracksContainer from "../components/TracksContainer/TracksContainer"; */
import { LoginContext } from "../context";
import SearchContainer from "./SearchContainer";

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
     <header>
      <img className='logo' src="https://res.cloudinary.com/dcfivdjx9/image/upload/v1670922661/catplayer_logo_iggwv1.png" alt="cat player"/>
    </header>
    <h1>HomePage</h1>
    <PlaylistContainer/>
    <AlbumContainer/>
    {/* <TracksContainer/> */}
    <ArtistsContainer/>
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

      <h1>WELCOME USER</h1>
      <SearchContainer />
      <Menu />

      <PlaylistContainer />
      <AlbumContainer />
      {/* <TracksContainer/> */}
      <ArtistsContainer />

      <GenresContainer />
      {/* <Footer/> */}
    </>
  );
};

export default Homepage;
