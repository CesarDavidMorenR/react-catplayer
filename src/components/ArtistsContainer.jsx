import React, { useEffect, useState } from "react";
import { fetchMusic } from "../API/FetchMusic";

const ArtistsContainer = () => {
  const [artists, setArtists] = useState([]);
  const url = "http://localhost:8000/artists";

  useEffect(() => {
    const artists = async () => {
      const data = await fetchMusic(url);
      setArtists(data);
      console.log(data);
    };
    artists();
  }, [url]);

  return (
    <>
      <div>
        {artists[0]?.map((artist) => (
          <div key={artist.id}>
            <img src={artist.photoUrl} alt={artist.name} />
            <div>
              <p>{artist.name}</p>
              <p>{artist.genres}</p>
              <p>{artist.popularity}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArtistsContainer;
