import { useReducer } from 'react';
import { cardsReducer } from '../context/cardsReducer';

export const useCards = (init) => {
  const [cards, handleCards] = useReducer(cardsReducer, init);

  const removeCard = (name) => {
    handleCards({
      type: 'REMOVE',
      payload: { name },
    });
  };

  const handleLikes = (name, value) => {
    handleCards({
      type: 'HANDLE_LIKES',
      payload: { name, value },
    });
  };

  return [cards, removeCard, handleLikes];
};
