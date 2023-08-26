import React, { useState } from 'react'

export default function Search(props) {
    
    const [message, setMessage] = useState('');
  
    const handleChange = (event) => {
      setMessage(event.target.value);
    };
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent the form from submitting
      props.showSearch(message); // Call the parent component's function
    };
   
  return (
    <div>
      <div className="search-box">
          <form className='searchForm' onSubmit={handleSubmit} >
            <input type="text" name="search" id="srch"onChange={handleChange} value={message} placeholder="Search" />
            <button type="submit" ><i className="fa fa-search" /></button>
            </form>
        </div>
    </div>
  )
}