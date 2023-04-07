import './App.css';
import Header from './ui/Header';
import Animals from './pages/Animals';
import { useReducer } from 'react';
import { useInput } from './hooks/useInput';
import { animalsData as initAnimals } from './context/animalsList.js';
import { animalsReducer } from './context/animalsReducer';

const App = () => {
  const [animals, handleAnimals] = useReducer(animalsReducer, initAnimals);
  const [searchInput, searchHandler] = useInput('');

  return (
    <>
      <Header searchHandler={searchHandler} handleAnimals={handleAnimals} />
      <Animals
        animals={animals}
        searchInput={searchInput}
        handleAnimals={handleAnimals}
      />
    </>
  );
};

export default App;
