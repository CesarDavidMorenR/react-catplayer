import React, { useEffect, useState } from "react";
import { fetchMusic } from "../API/FetchMusic";

const PlaylistContainer = () => {
  const [playlists, setPlaylist] = useState([]);
  const url = "http://localhost:8000/playlists";

  useEffect(() => {
    const playlists = async () => {
      const data = await fetchMusic(url);
      setPlaylist(data);
      console.log(data);
    };
    playlists();
  }, [url]);
  return (
    <>
      <div>
        {playlists.map((playlist) => (
          <div key={playlist.id}>
            <img src={playlist.thumbnail} alt={playlist.name} />
            <div>
              <h2>{playlist.name}</h2>
              <p>{playlist.isFollowed}</p>
              <p>{playlist.publicAccessible}</p>
              <p>{playlist.primaryColor}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default PlaylistContainer;
