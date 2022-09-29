import React from 'react'
import Header from './Header'
import Services from './Services'
import Contact from './Contact'
import "./App.css"
import {BrowserRouter , Routes ,Route} from "react-router-dom"
  
const images = {
  Home : "firstbanner.jpg",
  Services : "services.jpg",
  Contact : "contact.jpg"
}
const info ={
    phoneno : "987654321" ,
    sitename : "Stevie Solutions Limited ",
    page1 : "Home",
    page2 : "Services" ,
    page3 : " Contact "
}


function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
    
      <Route path='/' element ={ <Header images = {images}  info = {info}/>} > 
  <Route path='/Services'  element = {<Services images={images} info = {info}/>} ></Route>
   <Route path='/Contact'  element = {<Contact images={images} info={info}/>} ></Route>
    </Route>
    </Routes>  
    </BrowserRouter> 
    </div>
  )
}

export default App
