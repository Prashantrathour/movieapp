import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import Favorites from './components/Favorites';
import LoginPage from './components/LoginPage';
function MainRouter() {
  return (
    <Routes>
    <Route path=""  element={<Home/>}/>
     <Route path='/login' element={<LoginPage/>}/> 
    <Route path="/details/:id" element={<MovieDetails/>} />
    <Route path="/favorites" element={<Favorites/>} />
  
</Routes>
  )
   
    
}

export default MainRouter