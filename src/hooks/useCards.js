import { useCallback, useReducer } from 'react';
import { cardsReducer } from '../context/cardsReducer';

export const useCards = (init) => {
  const [cards, handleCards] = useReducer(cardsReducer, init);

  const removeCard = useCallback(
    (name) => {
      handleCards({
        type: 'REMOVE',
        payload: { name },
      });
    },
    [handleCards]
  );

  const handleLikes = useCallback(
    (name, value) => {
      handleCards({
        type: 'HANDLE_LIKES',
        payload: { name, value },
      });
    },
    [handleCards]
  );

  const addCard = useCallback(
    (name) => {
      handleCards({
        type: 'ADD',
        payload: { name },
      });
    },
    [handleCards]
  );

  return [cards, removeCard, handleLikes, addCard];
};
