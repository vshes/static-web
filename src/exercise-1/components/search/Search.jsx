import React from 'react';
import './serach.css';

const Search = ({placeholder, handleChange}) => (
    <input className='search'
           type='search'
           placeholder={placeholder}
           onChange={handleChange}>
    </input>
);

export default Search;