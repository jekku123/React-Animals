import { useState } from 'react';

const CardImage = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };
  return (
    <>
      <div
        className='img-placeholder'
        style={isLoading ? { display: 'flex' } : { display: 'none' }}
      >
        <span className='loader'></span>
      </div>
      <img
        src={`https://source.unsplash.com/500x400/?${data}`}
        alt={data}
        onLoad={handleLoading}
        style={isLoading ? { display: 'none' } : { display: 'block' }}
      />
    </>
  );
};

export default CardImage;
