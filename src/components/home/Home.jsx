import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMusic } from "../../API/fetchMusic";
import "./Home.css";


const Home = () => {
  //Playlist Fetch

  const [playlists, setPlaylist] = useState([]);
  const url = "http://localhost:8000/playlists";

  useEffect(() => {
    const playlists = async () => {
      const data = await fetchMusic(url);
      setPlaylist(data);
    };
    playlists();
  }, [url]);

  // Albums Fetch

  const [albums, setAlbums] = useState([]);
  const urlAlbums = "http://localhost:8000/albums";

  useEffect(() => {
    const connection = async () => {
      const data = await fetchMusic(urlAlbums);
      setAlbums(data);
    };
    connection();
  }, [urlAlbums]);

  return (
    <>
      <div className="gridHome">
        <h1>Hi, USUARIO(CAMBIAR POR VARIABLE)</h1>
        <button>Albums</button>
        <button>
          <Link className="nav-link" to={"/playlist"}>
            <p>View more</p>
          </Link>
        </button>
<<<<<<< HEAD

        <div className="img-responsive">
          {playlists
            .filter((item, playlists) => playlists < 3)
            .map((playlist) => (
              <div key={playlist.id}>
                <Link className="nav-link" to={"/playlist"}>
                  <img src={playlist.thumbnail} alt={playlist.name} />
                </Link>
=======
        <div className="img-flex">
        {playlists
          .filter((item, playlists) => playlists < 3)
          .map((playlist) => (
            <div className="play-img">
            <div className="play-list" key={playlist.id}>
              <Link className="nav-link" to={"/playlist"}>
                <img className="img-playlist" src={playlist.thumbnail} alt={playlist.name} />
              </Link>
>>>>>>> jackson

                <div>
                  <h2>{playlist.name}</h2>
                  <p>{playlist.isFollowed}</p>
                  <p>{playlist.publicAccessible}</p>
                  <p>{playlist.primaryColor}</p>
                </div>
              </div>
<<<<<<< HEAD
            ))}
        </div>



=======
              </div>
            </div>
          ))}
          </div>
>>>>>>> jackson
        {albums[0]
          ?.filter((item, playlists) => playlists < 3)
          .map((album) => (
            <div className="album-grid" key={album.id}>
              <img src={album.imageUrl} alt="" />
              <h2>{album.name}</h2>
              <p>{album.artist}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
