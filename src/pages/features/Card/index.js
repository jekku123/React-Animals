import './styles/index.css';
import LikeButton from '../components/LikeButton';
import LikeCount from '../components/LikeCount';

const Card = ({ animal, handleAnimals }) => {
  return (
    <div className='card'>
      <button
        className='btn remove-btn'
        onClick={() =>
          handleAnimals({
            type: 'REMOVE',
            payload: { name: animal.name },
          })
        }
        name={animal.name}
      >
        x
      </button>
      <img
        src={`https://source.unsplash.com/500x400/?${animal.name}`}
        alt={animal.name}
      />
      <h3>{animal.name}</h3>
      <div className='card-likes-area'>
        <LikeButton
          handleAnimals={handleAnimals}
          name={animal.name}
          value={-1}
        />
        <LikeCount animal={animal} />
        <LikeButton
          handleAnimals={handleAnimals}
          name={animal.name}
          value={+1}
        />
      </div>
    </div>
  );
};

export default Card;
