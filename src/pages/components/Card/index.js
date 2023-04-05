import './styles/index.css';
import Likes from '../Likes';

const Card = ({ animal, removeAnimal, handleLikes }) => {
  return (
    <div className='card'>
      <button
        className='btn remove-btn'
        onClick={removeAnimal}
        name={animal.name}
      >
        x
      </button>
      <img
        src={`https://source.unsplash.com/500x400/?${animal.name}`}
        alt={animal.name}
      />
      <h3>{animal.name}</h3>
      <Likes handleLikes={handleLikes} animal={animal} />
    </div>
  );
};

export default Card;
