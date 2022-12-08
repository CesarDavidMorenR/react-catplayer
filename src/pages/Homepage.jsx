import React from "react";
import styled from "styled-components";
import AlbumContainer from "../components/AlbumsContainer/AlbumsContainer";
import ArtistsContainer from "../components/ArtistContainer/ArtistsContainer";

import ButtonGeners from "../components/GenresContainer/ButtonGeners";
import Menu from "../components/Menu/Menu";
import PlaylistContainer from "../components/PlaylistContainer/PlaylistContainer";
/* import Footer from "./../components/Footer/Footer"; */
const Homepage = () => {
  return (
    <>
   
      <div>
        <Menu/>
        <welcomeUser>Welcome user</welcomeUser>

        <PlaylistContainer />
        <AlbumContainer />

        <ArtistsContainer />

      {/*   <ButtonGeners /> */}
        {/*    <Footer /> */}
      </div>
    </>
  );
};

export default Homepage;


