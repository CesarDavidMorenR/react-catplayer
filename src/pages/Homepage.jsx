import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import AlbumContainer from "../components/AlbumsContainer/AlbumsContainer";
import ArtistsContainer from "../components/ArtistContainer/ArtistsContainer";
import GenresContainer from "../components/GenresContainer/GenresContainer";
import Menu from "../components/Menu/Menu";
import PlaylistContainer from "../components/PlaylistContainer/PlaylistContainer";
/* import TracksContainer from "../components/TracksContainer/TracksContainer"; */
import { LoginContext } from "../context";
import Navbar from "../components/Navbar";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Homepage = () => {
  const { email, logout } = useContext(LoginContext);
  console.log(email);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();

    navigate("/", {
      replace: true,
    });
  };
  const [search, setSearch] = useState(false);
  return (
    <>
      <div className="container-user">
        <h1 className="welcome-user">
          {email ? `Welcome back, ${email.username}` : null}
        </h1>
      </div>
      <div>
        <button onClick={() => setSearch(!search)}>Start to search</button>
        {search && <Navbar />}
      </div>
      <h5>Left Icon</h5>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          value={value3}
          onChange={(e) => setValue3(e.target.value)}
          placeholder="Search"
        />
      </span>

      <div className="btn">
        <Button variant="contained" className="button_top" onClick={onLogout}>
          logout
        </Button>
      </div>
      <p>
        <strong>Welcome{/* {user ? user.name : "Guest"} */} </strong>
      </p>
      <Link to={"/AccountPage"}>
        <Button variant="text">
          <img className="profile__img" src="" alt="profile_photo"></img>
        </Button>
      </Link>
      <Menu />

      <PlaylistContainer />
      <AlbumContainer />
      {/* <TracksContainer/> */}
      <ArtistsContainer />

      <GenresContainer />
    </>
  );
};

export default Homepage;
