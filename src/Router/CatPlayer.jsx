<<<<<<< HEAD
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; /* import Footer from '../components/Footer/Footer' */
import Homepage from "../pages/Homepage";
import SearchPage from "../pages/SearchPage";
import ListPage from "./../pages/ListPage";
import AccountPage from "./../pages/AccountPage";
import TracksPage from "../pages/TracksPage";
import LoginPage from "../pages/LoginPage";
=======
import React from 'react'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";/* import Footer from '../components/Footer/Footer' */



import Homepage from '../pages/Homepage'
import SearchPage from '../pages/SearchPage'
import LikeSongs from './../pages/LikeSongs'
import AccountPage from './../pages/AccountPage'
import GenresPage from '../pages/GenresPage';
import TracksPage from '../pages/TracksPage';
import LoginPage from '../pages/LoginPage';


>>>>>>> 3d552cd3c2d6909f5ad56e890a48cafc22a1f4ae

//TODO LOCAL STORAGE CON COMPROVACION

const CatPlayer = () => {
  return (
<<<<<<< HEAD
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/HomePage" element={<Homepage />} />
          <Route path="/SearchPage" element={<SearchPage />} />
          <Route path="/ListPage" element={<ListPage />} />
          <Route path="/AccountPage" element={<AccountPage />} />
          <Route path="/TracksPage/:id" element={<TracksPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default CatPlayer;
=======
   <>
   <Router>
    <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/HomePage'   element={<Homepage/>}/>
        <Route path='/SearchPage' element={<SearchPage/>}/>
        <Route path="/LikeSongs" element={<LikeSongs/>}/>
        <Route path='/AccountPage' element={<AccountPage/>} />
        <Route path= '/GenresPage' element={<GenresPage/>}/>
        <Route path='/TracksPage/:id' element={<TracksPage/>} />
    </Routes>

   </Router>
   </>
  )
}

export default CatPlayer
>>>>>>> 3d552cd3c2d6909f5ad56e890a48cafc22a1f4ae
