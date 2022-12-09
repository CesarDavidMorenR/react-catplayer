import React from 'react'
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from "react-router-dom";/* import Footer from '../components/Footer/Footer' */



import Homepage from '../pages/Homepage'
import LikeSongs from './../pages/LikeSongs'
import ListPlaylist from './../pages/ListPlaylist'
import AccountPage from './../pages/AccountPage'
import LoginPage from '../pages/LoginPage';


const CatPlayer = () => {
  return (
   <>
   <BrowserRouter>

    <Routes>
        <Route index  element={<LoginPage/>}/>
        <Route path='/Homepage' element={<Homepage/>}/>
        <Route path='/SearchPage' element={<LikeSongs/>}/>
        <Route path="/ListPlaylist" element={<ListPlaylist/>}/>
        <Route path='/AccountPage' element={<AccountPage/>} />

        
    </Routes>

   </BrowserRouter>
   </>
  )
}

export default CatPlayer