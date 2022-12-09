import React, { useEffect, useState } from "react";
import { fetchMusic } from "../API/FetchMusic";

const ArtistContainer = () => {
  const [artists, setArtists] = useState([]);
  const url = " http://localhost:8000/artists";

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
        {artists[0].map((artist) => (
          <div key={artist.id}>
            <img src={artist.photoUrl} alt={artist.name} />
            <div>
              <h2>{artist.name}</h2>
              <p>{artist.genres}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ArtistContainer;
