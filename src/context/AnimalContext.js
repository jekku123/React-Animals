import { createContext, useContext, useReducer } from 'react';
import { animalsReducer } from './animalsReducer';
import { animalsData as initAnimals } from '../context/animalsList';

const AnimalContext = createContext(null);
const AnimalDispatchContext = createContext(null);

export const useAnimals = () => {
  return useContext(AnimalContext);
};

export const useAnimalsHandler = () => {
  return useContext(AnimalDispatchContext);
};

export const AnimalProvider = ({ children }) => {
  const [animals, handleAnimals] = useReducer(animalsReducer, initAnimals);

  return (
    <AnimalContext.Provider value={animals}>
      <AnimalDispatchContext.Provider value={handleAnimals}>
        {children}
      </AnimalDispatchContext.Provider>
    </AnimalContext.Provider>
  );
};
