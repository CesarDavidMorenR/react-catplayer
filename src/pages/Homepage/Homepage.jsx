import React from "react";
import AlbumContainer from "../../components/AlbumsContainer/AlbumsContainer";
import ArtistsContainer from "../../components/ArtistContainer/ArtistsContainer";
import GenresContainer from "../../components/GenresContainer/GenresContainer";
import TracksContainer from "../../components/TracksContainer/TracksContainer";

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
          <span>welcome back,{user}</span>
        </div>
      ) : null}

      <Menu />
      <PlaylistContainer />
      <AlbumContainer />
      {/* <TracksContainer/> */}
      <ArtistsContainer />
    </>
  );
};

export default Homepage;
