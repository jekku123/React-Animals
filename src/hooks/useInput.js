import { useCallback, useState } from 'react';

export const useInput = () => {
  const [value, setValue] = useState('');

  const inputHandler = useCallback(
    ({ target }) => {
      setValue(target.value);
    },
    [setValue]
  );

  const clearInput = () => {
    setValue('');
  };

  return [value, inputHandler, clearInput];
};
