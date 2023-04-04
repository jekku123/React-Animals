import { useState } from 'react';
import './styles/index.css';

const Header = ({ search, setSearch, animals, setAnimals }) => {
  const [animalToAdd, setAnimalToAdd] = useState('');

  const searchAnimals = (e) => {
    setSearch(e.target.value);
  };

  const handleAnimalToAddInputChange = (e) => {
    setAnimalToAdd(e.target.value);
  };

  const addAnimal = () => {
    if (!animals.some((animal) => animal.name === animalToAdd)) {
      setAnimals((prevAnimals) => [
        { name: animalToAdd, likes: 0 },
        ...prevAnimals,
      ]);
    }
  };

  return (
    <header>
      <h1>Animals App</h1>
      <div className='add-animal-area'>
        <input
          type='text'
          value={animalToAdd}
          onChange={handleAnimalToAddInputChange}
          placeholder='Add an animal'
        />
        <button className='add-btn' onClick={addAnimal}>
          Add
        </button>
      </div>
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
