import './styles/index.css';
import CardImage from '../CardImage';
import Likes from '../Likes';

const Card = ({ name, likes, handleCards }) => {
  const removeHandler = () => {
    handleCards({
      type: 'REMOVE',
      payload: { name },
    });
  };

  const likesHandler = (value) => {
    handleCards({
      type: 'HANDLE_LIKES',
      payload: { name, value },
    });
  };

  const playSound = (name) => {
    const sound = new Audio(
      `https://www.google.com/logos/fnbx/animal_sounds/${name}.mp3`
    );
    sound.play();
  };

  return (
    <div className='card'>
      <button className='btn remove-btn' onClick={removeHandler} name={name}>
        x
      </button>
      <CardImage name={name} />
      <div className='sound-icon' onClick={() => playSound(name)}>
        <i class='fa-solid fa-circle-play'></i>
      </div>
      <h3>{name}</h3>
      <div className='card-likes-area'>
        <button
          className='btn like-btn'
          onClick={() => likesHandler(-1)}
          name={name}
        >
          -
        </button>
        <Likes likes={likes} />
        <button
          className='btn like-btn'
          onClick={() => likesHandler(+1)}
          name={name}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
