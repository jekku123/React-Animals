import React from 'react';

const Search = ({ search, searchAnimals, placeholder }) => {
  return (
    <input
      type='text'
      value={search}
      onChange={searchAnimals}
      placeholder={placeholder}
    />
  );
};

export default Search;
