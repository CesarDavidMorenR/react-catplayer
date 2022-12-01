import React from "react";
import FetchPlaylists from "./API/FetchPlaylists";
import FetchPlaylist from "./API/FetchPlaylist";
const App = () => {
  return (
    <div>
      {/* <FetchPlaylist /> */}
      <FetchPlaylists />
    </div>
  );
};

export default App;
