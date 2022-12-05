import React, { useEffect, useState } from "react";
import { fetchMusic } from "../../API/fetchMusic";

const GenresContainer = () => {
  const [genres, setGenres] = useState([]);
  console.log(genres);
  const url = "http://localhost:8000/genres";

  useEffect(() => {
    const genres = async () => {
      const data = await fetchMusic(url);
      setGenres(data);
    };
    genres();
  }, [url]);
  return (
    <>
      <div>
        {genres.map((genre) => (
          <div key={genre.id}>
            <div>
              <p>{genre.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GenresContainer;
