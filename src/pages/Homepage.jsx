import React from 'react'
import AlbumContainer from '../components/AlbumsContainer/AlbumsContainer'
import ArtistsContainer from '../components/ArtistContainer/ArtistsContainer'
import GenresContainer from '../components/GenresContainer/GenresContainer'
import TracksContainer from '../components/TracksContainer/TracksContainer'

import '../components/home/Home.css'

import Menu from "../components/Menu/Menu";
import PlaylistContainer from "../components/PlaylistContainer/PlaylistContainer";


const Homepage = () => {



  return (
    <>
    

      <h1>WELCOME USER</h1>
     
      <Menu />

      <PlaylistContainer />
      <AlbumContainer />
      {/* <TracksContainer/> */}
      <ArtistsContainer />

 
    </>
  );
};

export default Homepage;
