import { useEffect, useState } from "react";
/* import Records from "../assets/db/json/data.json"; */

function FetchPlaylists() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(
      `https://raw.githubusercontent.com/assembler-institute/apollofy-music-frontend/main/src/db/json/seed.json`
    )
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.products);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <tbody>
        <tr>
          <th>name</th>
          <th>isFollowed</th>
          <th>thumbnail</th>
          <th>description</th>
          <th>publicAccessible</th>
        </tr>
        {/*  {Records.map((playlist) => {
          return <div className="box">{playlist.name}</div>;
        })} */}
      </tbody>
    </div>
  );
}

export default FetchPlaylists;
