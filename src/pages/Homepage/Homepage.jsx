import React from "react";
import AlbumContainer from "../../components/AlbumsContainer/AlbumsContainer";
import ArtistsContainer from "../../components/ArtistContainer/ArtistsContainer";
import GenresContainer from "../../components/GenresContainer/GenresContainer";
import TracksContainer from "../../components/TracksContainer/TracksContainer";
import "./Homepage.css";
import TextField from "@mui/material/TextField";
import Menu from "../../components/Menu/Menu";
import PlaylistContainer from "../../components/PlaylistContainer/PlaylistContainer";
import { useAuthContext } from "../../context/LoginContext";

const Homepage = (props) => {
  const { isAuthenticated } = useAuthContext();
  const user = JSON.parse(localStorage.getItem("name"));
  return (
    <>
      {isAuthenticated ? (
        <div>
          <span className="top_message">Welcome back, {user}</span>
        </div>
      ) : null}
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="🔍Search"
        />
      </div>
      <Menu />
      <PlaylistContainer />
      <AlbumContainer />
      <ArtistsContainer />
      <GenresContainer />
      {/* <TracksContainer/> */}
     
    </>
  );
};

export default Homepage;
