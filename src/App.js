import './App.css';
import Header from './ui/Header';
import Animals from './pages/Animals';
import { useReducer } from 'react';
import { useInput } from './hooks/useInput';
import { animalsData as initAnimals } from './context/animalsList.js';
import { animalsReducer } from './context/animalsReducer';

const App = () => {
  const [animals, handleAnimals] = useReducer(animalsReducer, initAnimals);
  const [addAnimalInput, addAnimalHandler, clearAddAnimalInput] = useInput('');
  const [searchInput, searchHandler] = useInput('');

  const addAnimal = () => {
    handleAnimals({ type: 'ADD', payload: addAnimalInput });
    clearAddAnimalInput();
  };

  const removeAnimal = (e) => {
    handleAnimals({ type: 'REMOVE', payload: e.target.name });
  };

  const handleLikes = (e) => {
    handleAnimals({ type: 'HANDLE_LIKES', payload: e.target });
  };

  return (
    <>
      <Header
        addAnimalInput={addAnimalInput}
        searchHandler={searchHandler}
        addAnimal={addAnimal}
        addAnimalInputHandler={addAnimalHandler}
      />
      <Animals
        animals={animals}
        searchInput={searchInput}
        handleLikes={handleLikes}
        removeAnimal={removeAnimal}
      />
    </>
  );
};

export default App;
