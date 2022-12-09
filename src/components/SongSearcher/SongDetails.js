import React from "react";
import SongArtist from "./SongArtist";

const SongDetails = ({ search, bio }) => {
  return (
    <div>
      <h2>Detalles</h2>
      <SongArtist />
    </div>
  );
};

export default SongDetails;
