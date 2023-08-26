import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productdata } from "../data";
import "./ProductView.css";

export default function Product() {
  document.title = "Virtual Cart | Product";

  const {id}  = useParams();
  console.log(id)
  const productinfo = productdata.find((e) => e.id == id); 

  const [currentImage, setCurrentImage] = useState(productinfo.images[0]);

  if (!productinfo) {
    return <div>No product found for the given ID</div>; // Handle case when productinfo is not found
  }
  
  const handleImageClick = (image) => {
    setCurrentImage(image);
  };
  // const totalValue = i * (100 - discount) / 100

  return (
    <div className="Container" style={{ marginTop: 110 }}>
      <div className="product-detail">
        <div className="product-image">
          <img src={currentImage} alt="Product Image" aria-hidden="true"  />
          <div className="product-images">
            {productinfo.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index + 1}`}
                aria-hidden="true"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="product-info">
          <h1 className="product-title">{productinfo.title}</h1>
          <p className="product-price">{productinfo.discountPercentage}%off </p>
          <p className="product-price"><s>${productinfo.price * (100+productinfo.discountPercentage)/100}</s></p>
          <p className="product-price">${productinfo.price}</p>
          
          <div className="product-rating">
            Rating: <span>{productinfo.rating}/5</span>
          </div>
          
          <p className="product-description">{productinfo.description}</p>
          <p className="product-brand">
            Brand: <span>{productinfo.brand}</span>
          </p>
          <div className="product-stock">
            Only <span>{productinfo.stock}</span> Products is left
          </div>
          <div className="card-body">
          <a href="/cart" className="btn btn-sm ">Add to cart</a>
          <a href={`/product/${productinfo.id}` } target='_blank' rel='noreferrer' className="btn btn-sm mx-3">Buy Now</a>
        </div>
        </div>
      </div>
    </div>
  );
}
