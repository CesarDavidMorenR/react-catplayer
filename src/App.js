
import './App.css';
import Login from './components/Login';
import ArtistsContainer from './components/ArtistsContainer';
import GenresContainer from './components/GenresContainer';
import TracksContainer from './components/TracksContainer';
function App() {
  return (
    <>

    <Login/>
    <TracksContainer/>
    <ArtistsContainer/>
    <GenresContainer/>

    </>
  );
  }
export default App;
