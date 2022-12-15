import React, { useEffect, useState } from "react";
import useFetchApi from "../../API/useFetchApi";







const TracksContainer = () => {
 






  const {tracks} = useFetchApi();
 
  return (
    <>
      <div>
        {tracks.slice(0,3).map((track) => (
          <div key={track.id}>
            <img src={track.thumbnail} alt={track.name} />
            {/* <img src={track.url} alt={track.name} /> */}
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
