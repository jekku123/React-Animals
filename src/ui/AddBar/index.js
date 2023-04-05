import React from 'react';

const AddBar = ({ inputHandler, placeholder, addAnimal, text, value }) => {
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      addAnimal();
    }
  };

  return (
    <div className='add-animal-area'>
      <input
        onChange={inputHandler}
        onKeyDown={handleEnter}
        placeholder={placeholder}
        value={value}
      />
      <button className='btn add-btn' onClick={addAnimal}>
        {text}
      </button>
    </div>
  );
};

export default AddBar;
