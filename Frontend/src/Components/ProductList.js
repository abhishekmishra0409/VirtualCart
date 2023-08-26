import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom'

export default function ProductList(props) {
  return (
    <div>
      <div className="card" style={{ "width": "18rem", "cursor":"pointer" } } >
      <Link to={`/product/${props.id}`}>
        <div className="ImgCard">

        <img src={props.imgUrl} className="card-img-top" alt="..." />
        </div>
        <div className="card-body cardBody">
          <h5 className="card-title">{props.tittle}</h5>
          {/* <p className="card-text">{props.description}.....</p> */}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price : ${props.price}</li>
          <li className="list-group-item">Rating : {props.rating}/5</li>
          {/* <li className="list-group-item">{props.producturl}</li> */}
        </ul>
      </Link>
        <div className="card-body">
          <a href="/cart" className="btn btn-sm ">Add to cart</a>
          <a href={`/product/${props.id}` } target='_blank' rel='noreferrer' className="btn btn-sm mx-3">Buy Now</a>
        </div>
      </div>
    </div>
  )
}
