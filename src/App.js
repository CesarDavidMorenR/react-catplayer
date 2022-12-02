import "./App.css";
import AlbumContainer from "./components/AlbumsComponent";
import PlaylistContainer from "./components/PlaylistComponent";
import TracksContainer from "./components/TracksComponent";
import UserContainer from "./components/UserComponent";
import Login from "./components/Login";
import ArtistsContainer from "./components/ArtistsContainer";
import GenresContainer from "./components/GenresContainer";

function App() {
  return (
    <>
      <Login />
      <TracksContainer />
      <ArtistsContainer />
      <GenresContainer />
      <UserContainer />
      <PlaylistContainer />
      <AlbumContainer />
    </>
  );
}

export default App;
