import React, { useEffect, useState } from "react";
import { fetchMusic } from "./../../Api/fetchMusic";
import './Genres.css'


const GenresContainer = () => {
  const [genres, setGenres] = useState([]);
  console.log(genres);
  const url = "http://localhost:5000/genres";

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
      <div>
      <h2>Música por Género</h2>
            </div>
            <div className="Btn_container">
        {genres.map((genre) => (
          <div key={genre.id} >
             <button className="Btn-genre">{genre.name}</button>
            </div>
          
        ))}
        </div>
      </div>
      </>
  );
};


export default GenresContainer;