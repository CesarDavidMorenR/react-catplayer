import React from 'react'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";/* import Footer from '../components/Footer/Footer' */



import Homepage from '../pages/Homepage'
import SearchPage from '../pages/SearchPage'
import ListPlaylist from './../pages/ListPlaylist'
import AccountPage from './../pages/AccountPage'


const CatPlayer = () => {
  return (
   <>
   <Router>
    <Routes>
        <Route index  element={<Homepage/>}/>
        <Route path='/SearchPage' element={<SearchPage/>}/>
        <Route path="/ListPlaylist" element={<ListPlaylist/>}/>
        <Route path='/AccountPage' element={<AccountPage/>} />

        
    </Routes>

   </Router>
   </>
  )
}

export default CatPlayer