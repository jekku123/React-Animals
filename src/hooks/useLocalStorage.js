import { useEffect, useState } from 'react';

const getData = (key, init) => {
  const jsonItem = localStorage.getItem(key);
  const parsedItem = JSON.parse(jsonItem);
  return parsedItem || init;
};

export const useLocalStorage = (key, init) => {
  const [state, setState] = useState(() => {
    return getData(key, init);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
