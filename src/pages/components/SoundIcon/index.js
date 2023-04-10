import React from 'react';

const SoundIcon = ({ name }) => {
  const playSound = (name) => {
    const sound = new Audio(
      `https://www.google.com/logos/fnbx/animal_sounds/${name}.mp3`
    );
    sound.play();
  };

  return (
    <span className='sound-icon' onClick={() => playSound(name)}>
      <i className='fa-solid fa-bullhorn fa-xs'></i>
    </span>
  );
};

export default SoundIcon;
