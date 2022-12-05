import React from "react";
import { Link } from "react-router-dom";
import "./../../assets/style/xd.css";


const Menu = () => {
  return (
    <>
    <nav>
	<Link to="/">Home</Link>
	<Link to="/SearchPage">Search</Link>
	<Link to="/ListPlaylist">List</Link>
	<Link to="/AccountPage">Account</Link>

	<div class="animation start-home"></div>
</nav>

    </>
  );
};

export default Menu;

