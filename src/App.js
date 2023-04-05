import Animals from './components/Animals';
import Header from './components/Header';
import { useState } from 'react';
import { animalsData } from './data/animalsList.js';
import './App.css';

function App() {
  const [animals, setAnimals] = useState(animalsData);
  const [search, setSearch] = useState('');
  const [animalToAdd, setAnimalToAdd] = useState('');

  const handleAddInput = (e) => {
    setAnimalToAdd(e.target.value);
  };

  const addAnimal = () => {
    if (animalToAdd.length > 0) {
      if (!animals.some((animal) => animal.name === animalToAdd)) {
        setAnimals((prevAnimals) => [
          { name: animalToAdd, likes: 0 },
          ...prevAnimals,
        ]);
      }
    }
    setAnimalToAdd('');
  };

  const searchAnimals = (e) => {
    setSearch(e.target.value);
  };

  const handleLikes = (e) => {
    setAnimals((prevAnimals) =>
      prevAnimals.map((animal) => {
        if (animal.name === e.target.name) {
          return { ...animal, likes: animal.likes + Number(e.target.value) };
        }
        return animal;
      })
    );
  };

  const removeAnimal = (e) => {
    setAnimals(animals.filter((animal) => animal.name !== e.target.name));
  };

  return (
    <>
      <Header
        animalToAdd={animalToAdd}
        searchAnimals={searchAnimals}
        addAnimal={addAnimal}
        handleAddInput={handleAddInput}
      />
      <Animals
        animals={animals}
        search={search}
        handleLikes={handleLikes}
        removeAnimal={removeAnimal}
      />
    </>
  );
}

export default App;
