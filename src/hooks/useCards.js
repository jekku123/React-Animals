import { useReducer } from 'react';
import { animalsReducer } from '../context/animalsReducer';

export const useCards = (init) => {
  const [state, handleState] = useReducer(animalsReducer, init);

  return [state, handleState];
};
