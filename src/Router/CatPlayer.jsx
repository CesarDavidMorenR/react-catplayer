import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; /* import Footer from '../components/Footer/Footer' */

import Homepage from "../pages/Homepage";
import SearchPage from "../pages/SearchPage";
import LikeSongs from "./../pages/LikeSongs";
import AccountPage from "./../pages/AccountPage";
import GenresPage from "../pages/GenresPage";
import TracksPage from "../pages/TracksPage";
import LoginPage from "../pages/LoginPage";
import MyPlayList from "../pages/MyPlayList";

//TODO LOCAL STORAGE CON COMPROVACION

const CatPlayer = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/HomePage" element={<Homepage />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/LikeSongs" element={<LikeSongs />} />
          <Route path="/AccountPage" element={<AccountPage />} />
          <Route path="/GenresPage" element={<GenresPage />} />
          <Route path="/TracksPage/:id" element={<TracksPage />} />
          <Route path="/MyPlayList" element={<MyPlayList />} />
        </Routes>
      </Router>
    </>
  );
};

export default CatPlayer;
