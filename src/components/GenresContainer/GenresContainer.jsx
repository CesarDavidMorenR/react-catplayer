import React, { useEffect, useState } from "react";
import useFetchApi from "../../API/useFetchApi";
import './Genres.css'


const GenresContainer = () => {
  const {genres} = useFetchApi();


  return (
    <>
      <div>
      <div>
      <h2>Música por Género</h2>
            </div>
            <div className="Btn_container">
        {genres.map((genre) => (
          <div key={genre.id} >
             <button className="Btn-genre"><p className="GenreName">{genre.name}</p></button>
            </div>
          
        ))}
        </div>
      </div>
      </>
  );
};


export default GenresContainer;
