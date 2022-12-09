import React, { useEffect, useState } from "react";
import { fetchMusic } from "../API/FetchMusic";
import { Button } from "@mui/material";
import "./GenresContainer.css";


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
              <div className="button__genres">
                <Button variant="contained">{genre.name}</Button>
              </div>
              <p>{genre.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GenresContainer;
