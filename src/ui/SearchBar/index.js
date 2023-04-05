import React from 'react';

const SearchBar = ({ handler, placeholder }) => {
  return <input onChange={handler} placeholder={placeholder} />;
};

export default SearchBar;
