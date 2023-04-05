import { useState } from 'react';

export const useInput = (value) => {
  const [search, setSearch] = useState(value);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const clearInput = () => {
    setSearch('');
  };

  return [search, searchHandler, clearInput];
};
