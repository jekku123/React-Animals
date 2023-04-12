import { useEffect, useState } from 'react';

const getStorageData = (key, defaultValue) => {
  const savedItem = localStorage.getItem(key);
  const parsedItem = JSON.parse(savedItem);
  return parsedItem || defaultValue;
};

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return getStorageData(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
