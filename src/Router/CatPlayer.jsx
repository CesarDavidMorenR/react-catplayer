import React from 'react'
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";/* import Footer from '../components/Footer/Footer' */



import Homepage from '../pages/Homepage'
import SearchPage from '../pages/SearchPage'
import ListPage from './../pages/ListPage'
import AccountPage from './../pages/AccountPage'
import GenresPage from '../pages/GenresPage';


const CatPlayer = () => {
  return (
   <>
   <Router>
    <Routes>
        <Route index  element={<Homepage/>}/>
        <Route path='/SearchPage' element={<SearchPage/>}/>
        <Route path="/ListPage" element={<ListPage/>}/>
        <Route path='/AccountPage' element={<AccountPage/>} />
        <Route path= '/GenresPage' element={<GenresPage/>}/>

        
    </Routes>

   </Router>
   </>
  )
}

export default CatPlayer