import React, { useEffect, useState } from "react";
import { fetchMusic } from "../API/FetchMusic";

const TracksContainer = () => {
  const [tracks, setTracks] = useState([]);
  const url = "http://localhost:8000/tracks";

  useEffect(() => {
    const tracks = async () => {
      const data = await fetchMusic(url);
      setTracks(data);
      console.log(data);
    };
    tracks();
  }, [url]);
  return (
    <>
      <div>
        {tracks.map((track) => (
          <div key={track.id}>
            <img src={track.thumbnail} alt={track.name} />
            <img src={track.url} alt={track.name} />
            <div>
              <p>{track.name}</p>
              <p>{track.artist}</p>
              <p>{track.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TracksContainer;
