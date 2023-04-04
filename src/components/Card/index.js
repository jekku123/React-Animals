import './styles/index.css';

const Card = ({ animal, removeAnimal, handleLikes }) => {
  return (
    <div className='card'>
      <div className='card-close-btn'>
        <button onClick={removeAnimal} value={animal.name}>
          x
        </button>
      </div>
      <img
        src={`https://source.unsplash.com/500x400/?${animal.name}`}
        alt={animal.name}
      />
      <div className='card-main'>
        <h2>{animal.name.charAt(0).toUpperCase() + animal.name.slice(1)}</h2>
        <div className='card-likes-area'>
          <button onClick={handleLikes} name={animal.name} value={-1}>
            -
          </button>
          <div className='likes'>
            {animal.likes >= 0 ? (
              <i className='fa-solid fa-heart' style={{ color: '#ff0000' }} />
            ) : (
              <i
                className='fa-solid fa-heart-crack'
                style={{ color: '#ff0000' }}
              />
            )}
            <p className='like-count'>{animal.likes}</p>
          </div>
          <button onClick={handleLikes} name={animal.name} value={+1}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
