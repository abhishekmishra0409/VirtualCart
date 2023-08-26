import  Home  from './Pages/Home';
import  Cart  from './Pages/Cart';
import  Contact  from './Pages/Contact';
import  Products  from './Pages/Categories';
import Product from './Components/ProductView';
import './App.css';
import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';


export default function App() {

  const [search , setSearch] = useState('')
   
  let showSearch = (searchValue)=>{
    setSearch(searchValue)
  }

  return (
    <div>
      <BrowserRouter>
      <Navbar showSearch = {showSearch}/>
      <Routes>
        <Route exact index element = {<Home search = {search} />}  />
        <Route exact path='/' element = {<Home search = {search} />}  />
        <Route exact path='/Cart' element = {<Cart/>} />
        <Route exact path='/Products/' element = {<Products/>} />
        <Route exact path='/Contact/' element = {<Contact/>} />
        <Route exact path='/Product/:id' element = {<Product/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
