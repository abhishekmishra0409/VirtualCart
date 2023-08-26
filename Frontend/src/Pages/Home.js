import React from 'react'
import Products from '../Components/Procucts'
import Productad from '../Components/Productad';

export default function Home(props) {
  document.title = 'Virtual Cart ';
  return (
    <div >
      <Productad/>
      <Products search = {props.search}/>  
    </div>
  )
}
