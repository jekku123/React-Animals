import { useState } from 'react';
import './styles/index.css';
import Search from '../Search';

const Header = ({ search, setSearch, animals, setAnimals }) => {
  const [animalToAdd, setAnimalToAdd] = useState('');

  const searchAnimals = (e) => {
    setSearch(e.target.value);
  };

  const handleAnimalToAddInputChange = (e) => {
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

  const handleEnterSubmit = (e) => {
    if (e.key === 'Enter') {
      addAnimal();
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
          onKeyDown={handleEnterSubmit}
          placeholder='Add an animal'
        />
        <button className='add-btn' onClick={addAnimal}>
          Add
        </button>
      </div>
      <Search
        search={search}
        searchAnimals={searchAnimals}
        placeholder='Search for an animal'
      />
    </header>
  );
};

export default Header;
