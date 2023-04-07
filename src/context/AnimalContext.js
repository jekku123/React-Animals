import { createContext, useContext, useReducer } from 'react';
import { animalsReducer } from './animalsReducer';
import { animalsData as initAnimals } from '../context/animalsList';

export const AnimalContext = createContext(null);
export const AnimalDispatchContext = createContext(null);

export function useAnimals() {
  return useContext(AnimalContext);
}

export function useAnimalsHandler() {
  return useContext(AnimalDispatchContext);
}

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
