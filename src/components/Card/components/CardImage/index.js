import { useState } from 'react';
import './styles/index.css';

const CardImage = ({ name }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div
        className='img-placeholder'
        style={isLoading ? { display: 'flex' } : { display: 'none' }}
      >
        <span className='loader'></span>
      </div>
      <img
        src={`https://source.unsplash.com/200x160/?${name}`}
        alt={name}
        onLoad={() => setIsLoading(false)}
        style={isLoading ? { display: 'none' } : { display: 'block' }}
      />
    </>
  );
};

export default CardImage;
