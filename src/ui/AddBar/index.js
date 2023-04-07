import React from 'react';
import { useInput } from '../../hooks/useInput';

const AddBar = ({ placeholder, handleAnimals }) => {
  const [addAnimalInput, addAnimalHandler, clearAddAnimalInput] = useInput('');

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
