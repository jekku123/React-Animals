import { useReducer } from 'react';
import { cardsReducer } from '../context/cardsReducer';

export const useCards = (init) => {
  const [state, handleState] = useReducer(cardsReducer, init);

  return [state, handleState];
};
