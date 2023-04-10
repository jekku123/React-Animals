import React from 'react';

const SoundIcon = ({ handler }) => {
  return (
    <div className='sound-icon' onClick={handler}>
      <i className='fa-solid fa-circle-play'></i>
    </div>
  );
};

export default SoundIcon;
