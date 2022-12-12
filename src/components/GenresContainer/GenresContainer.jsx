import React, { useEffect, useState } from "react";
import { fetchMusic } from "./../../API/FetchMusic";
import { Link } from "react-router-dom";
import './Genres.css'


const GenresContainer = () => {
  const [genres, setGenres] = useState([]);
  console.log(genres);
  const url = `http://localhost:8000/genres`;

  useEffect(() => {
    const genres = async () => {
      const data = await fetchMusic(url);
      setGenres(data);
    };
    genres();
  }, [url]);

  // const colors = [
  //   "#ef5777",
  //   "#575fcf",
  //   "#4bcffa",
  //   "#34e7e4",
  //   "#0be881",
  //   "#f53b57",
  //   "#3c40c6",
  //   "#0fbcf9",
  //   "#00d8d6",
  //   "#05c46b",
  //   "#ffc048",
  //   "#ffdd59",
  //   "#ff5e57",
  //   "#d2dae2",
  //   "#485460",
  //   "#ffa801",
  //   "#ffd32a",
  //   "#ff3f34"
  // ]; 

  return (
    <>
      <div>
      <div>
      <h2>Música por Género</h2>
            </div>
            <div className="Btn_container">
        {genres.map((genre) => (
          <div key={genre.id} >
          <Link to={'/GenresPage'}>
             <button className="Btn-genre">{genre.name}</button>
             </Link>
            </div>
          
        ))}
        </div>
      </div>
      </>
  );
};


export default GenresContainer;