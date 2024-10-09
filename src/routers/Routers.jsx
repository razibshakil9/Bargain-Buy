import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import CarListing from "../pages/CarListing"
import CarDetails from "../pages/CarDetails"
import Calculator from '../pages/Calculator'
import Blog from "../pages/Blog"
import BlogDetails from "../pages/BlogDetails"
import NotFound from "../pages/NotFound"
import Contact from '../pages/Contact'
import Acution from '../components/acution'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/cars' element={<CarListing/>}/>
      <Route path='/cars/:slug' element={<CarDetails/>}/>
      <Route path='/calculator' element={<Calculator/>}/>
      <Route path='/blogs' element={<Blog/>}/>
      <Route path='/blogs/:slug' element={<BlogDetails/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/auction' element={<Acution/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default Routers
