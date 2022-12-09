import React from "react";
import AlbumContainer from "../components/AlbumsContainer/AlbumsContainer";
import ArtistsContainer from "../components/ArtistContainer/ArtistsContainer";
import ButtonGeners from "../components/GenresContainer/ButtonGeners";
import PlaylistContainer from "../components/PlaylistContainer/PlaylistContainer";
import SearchMusic from "../components/SearchMusic";

import Footer from "./../components/Footer/Footer";
const Homepage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <SearchMusic />
      <PlaylistContainer />
      <AlbumContainer />

      <ArtistsContainer />

      <ButtonGeners />
      <Footer />
    </>
  );
};

export default Homepage;
