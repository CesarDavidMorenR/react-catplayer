import data from "../assets/db/data.json";
import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;
    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = ``;
      let songUrl = ``;
    };
    fetchData();
  }, [search]);
  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h3>SongSearch</h3>
      <SongForm handleSearch={handleSearch} />
      <SongDetails search={search} bio={bio} />
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default SongSearch;
