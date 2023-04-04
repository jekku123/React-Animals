import { useState } from 'react';
import './styles/index.css';

const Header = ({ search, setSearch, setAnimals }) => {
  const [animalToAdd, setAnimalToAdd] = useState({});

  const searchAnimals = (e) => {
    setSearch(e.target.value);
  };

  const handleAnimalToAddInputChange = (e) => {
    setAnimalToAdd(e.target.value);
  };

  const addAnimal = () => {
    // const newAnimals = animals.
  };

  return (
    <header>
      <h1>Animals App</h1>
      <input
        type='text'
        value={animalToAdd}
        onChange={handleAnimalToAddInputChange}
        placeholder='Add an animal'
      />
      <button className='btn' onClick={addAnimal}>
        Add
      </button>
      <input
        type='text'
        value={search}
        onChange={searchAnimals}
        placeholder='Search for an animal'
      />
    </header>
  );
};

export default Header;
