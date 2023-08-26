import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Search from './Search'


export default function Navbar(props) {

  return (
    <>
      <header>
        <input type="checkbox" id="chk1" />
        <input type="checkbox" id="chk2" />

        <a className="Tittle" href="/"><img src={require("./VirtulCart-logos_transparent.png")} alt="Logo" /><p>VirtualCart</p></a>
        <div className="search-box">
          <Search showSearch = {props.showSearch}/>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to= {{pathname:'/Products'  }}>Products </Link></li>
          <li><Link to="/Contact">Contact us</Link></li>
          <li className='cart'><Link to="/Cart">Cart</Link></li>
          <li className="nav-but">
            <a className="btn " href="/signup">SignUp</a>
            <a className="btn btn-2 " href="/login">Login</a>
          </li>
          <li>
          </li>
          
        </ul>
        <div className="search">
          <label htmlFor="chk2">
          <i className="fa fa-search" />
          </label>
        </div>
        <div className="carticon">
          <Link to="/Cart">
          <i className="fa fa-cart-arrow-down"/>
          </Link>
        </div>
        <div className="menu">
          <label htmlFor="chk1">
            <i className="fa fa-bars" />
          </label>
        </div>
        
      </header>
    </>
  )
}
