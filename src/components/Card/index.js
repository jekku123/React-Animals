import './styles/index.css';

const Card = ({ animal, addLike, removeLike, removeAnimal }) => {
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
      <h2>{animal.name.charAt(0).toUpperCase() + animal.name.slice(1)}</h2>
      <div className='card-likes'>
        <button onClick={removeLike} value={animal.name}>
          -
        </button>
        <div className='likes'>
          <p className='like-count'>{animal.likes}</p>
          {animal.likes >= 0 ? (
            <i className='fa-solid fa-heart' style={{ color: '#ff0000' }} />
          ) : (
            <i
              className='fa-solid fa-heart-crack'
              style={{ color: '#ff0000' }}
            />
          )}
        </div>
        <button onClick={addLike} value={animal.name}>
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
