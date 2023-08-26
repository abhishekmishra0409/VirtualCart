import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Spiner from './Spiner';
import { productdata } from '../data'


const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  let itemsPerPage = 15;
  const [loading, setLoading] = useState(false);

  const fetchProducts = (skip) => {
    setLoading(true);
    setProducts(productdata.slice(skip, (skip + 15)));
    setLoading(false);
  };
  // Search Product
  // const SearchProduct = async (skip) => {
  //     setLoading(true);
      
  //     setLoading(false);
  // };

  useEffect(() => {
    fetchProducts(0); // Fetch products on initial load
    // SearchProduct(0)
  }, []);

  const handlePrevClick = () => {
    const newPage = page - 1;
    const newSkip = (newPage - 1) * itemsPerPage;
    setPage(newPage);
    fetchProducts(newSkip)
    // SearchProduct(newSkip)
  };

  const handleNextClick = () => {
    const newPage = page + 1;
    const newSkip = (newPage - 1) * itemsPerPage;
    setPage(newPage);
    fetchProducts(newSkip)
    // SearchProduct(newSkip)
  };

  return (
    <div>
      {window.scrollTo(0, 0)}
      <div className='container' style={{ marginTop: 50 }}>
        {loading && <Spiner />}
        {/* {props.search} */}
        <div className='row Products'>
          {!loading && products?.filter((element) => {
            return props.search.toLowerCase() === '' ? element : element.category.toLowerCase().includes(props.search.toLowerCase());
          }).map(element => (
              <div className="col-md-3 my-4 Product" key={element.title}>
              <ProductList
                id = {element.id}
                tittle={element.title}
                description={element.description.slice(0, 45)}
                imgUrl={element.thumbnail}
                price={element.price}
                rating={element.rating}
              />
            </div>
          ))}
          <div className="container my-4 prev-nextbtn">
            <button disabled={page <= 1} type='button' className='btn btn-dark' onClick={handlePrevClick}>
            &larr; Previous
            </button>
            <button disabled={page >= Math.ceil(productdata.length / itemsPerPage)} type='button' className='btn btn-dark' onClick={handleNextClick}>
            Next &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;