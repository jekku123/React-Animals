import { useEffect, useState } from 'react';

export const useLocalStorage = (key, init) => {
  const [state, setState] = useState(() => {
    return getStorageItem(key, init);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

const getStorageItem = (key, init) => {
  const jsonItem = localStorage.getItem(key);
  const parsedItem = JSON.parse(jsonItem);
  return parsedItem || init;
};
