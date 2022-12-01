import "./App.css";
import AlbumContainer from "./components/AlbumsComponent";
import ArtistContainer from "./components/ArtistsComponent";
import PlaylistContainer from "./components/PlaylistComponent";
import TracksContainer from "./components/TracksComponent";
import UserContainer from "./components/UserComponent";

function App() {
  return (
    <>
      {/*  <TracksContainer />
      <PlaylistContainer />
      <UserContainer />
      <ArtistContainer /> */}
      <AlbumContainer />
    </>
  );
}

export default App;
