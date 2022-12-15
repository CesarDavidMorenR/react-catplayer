import React, { useContext } from "react";
import { useNavigate } from "react-router";
import AlbumContainer from "../components/AlbumsContainer/AlbumsContainer";
import ArtistsContainer from "../components/ArtistContainer/ArtistsContainer";
import GenresContainer from "../components/GenresContainer/GenresContainer";
import Menu from "../components/Menu/Menu";
import PlaylistContainer from "../components/PlaylistContainer/PlaylistContainer";
import TracksContainer from "../components/TracksContainer/TracksContainer";
import { useLoginContext } from "../context/LoginContext";


const Homepage = (props) => {
const {isAuthenticated} = useLoginContext()
const user = JSON.parse(localStorage.getItem("user"));


  return (
    <>
    <div>
    {isAuthenticated ? (
          <div>
            <span>Hi, {user}</span>
          </div>
        ) : null}
      </div>



      <h1>WELCOME USER</h1>
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
