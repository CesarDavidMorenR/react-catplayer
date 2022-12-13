import React from 'react'
import AlbumContainer from '../components/AlbumsContainer/AlbumsContainer'
import ArtistsContainer from '../components/ArtistContainer/ArtistsContainer'
import GenresContainer from '../components/GenresContainer/GenresContainer'
import PlaylistContainer from '../components/PlaylistContainer/PlaylistContainer'
import TracksContainer from '../components/TracksContainer/TracksContainer'
import Footer from './../components/Footer/Footer'
import '../components/home/Home.css'
const Homepage = () => {
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


<GenresContainer/>
 <Footer/> 
    </>
  )
}

export default Homepage