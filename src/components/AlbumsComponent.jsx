import { useEffect, useState } from "react";
import { fetchMusic } from "../API/FetchMusic";

const AlbumContainer = () => {
  const [albums, setAlbums] = useState([]);
  const url = "http://localhost:8000/albums";

  useEffect(() => {
    const connection = async () => {
      const data = await fetchMusic(url);
      setAlbums(data);
    };
    connection();
  }, [url]);
  return (
    <>
      {albums[0]?.map((album) => (
        <div key={album.id}>
          <img src={album.imageUrl} alt="" />
          <h2>{album.name}</h2>
          <p>{album.artist}</p>
        </div>
      ))}
    </>
  );
};
export default AlbumContainer;
