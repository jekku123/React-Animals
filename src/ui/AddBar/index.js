import React from 'react';
import { useInput } from '../../hooks/useInput';
import { useAnimalsHandler } from '../../context/AnimalContext';
import './styles/index.css';

const AddBar = ({ placeholder }) => {
  const [addAnimalInput, addAnimalHandler, clearAddAnimalInput] = useInput('');
  const handleAnimals = useAnimalsHandler();

  const addAnimal = () => {
    handleAnimals({ type: 'ADD', payload: { name: addAnimalInput } });
    clearAddAnimalInput();
  };

  return (
    <div className='add-animal-area'>
      <input
        onChange={addAnimalHandler}
        onKeyDown={(e) => e.key === 'Enter' && addAnimal()}
        placeholder={placeholder}
        value={addAnimalInput}
      />
      <button className='btn add-btn' onClick={addAnimal}>
        Add
      </button>
    </div>
  );
};

export default AddBar;
