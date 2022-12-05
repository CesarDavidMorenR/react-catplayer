import React from 'react'
import AlbumContainer from '../components/AlbumsContainer/AlbumsContainer'
import ArtistsContainer from '../components/ArtistContainer/ArtistsContainer'
import PlaylistContainer from '../components/PlaylistContainer/PlaylistContainer'


const Homepage = () => {
  return (
    <>
    <h1>HomePage</h1>
<ArtistsContainer/>
<PlaylistContainer/>
<AlbumContainer/>
    </>
  )
}

export default Homepage