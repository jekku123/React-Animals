import React from 'react';

const Search = ({ searchAnimals, placeholder }) => {
  return (
    <input type='text' onChange={searchAnimals} placeholder={placeholder} />
  );
};

export default Search;
