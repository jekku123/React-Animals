import './styles/index.css';
import CardImage from '../CardImage';
import Likes from '../Likes';

const Card = ({ name, likes, removeHandler, likesHandler }) => {
  const playSound = (name) => {
    const sound = new Audio(
      `https://www.google.com/logos/fnbx/animal_sounds/${name}.mp3`
    );
    sound.play();
  };

  return (
    <div className='card'>
      <button className='btn remove-btn' onClick={() => removeHandler(name)}>
        x
      </button>
      <CardImage name={name} />
      <div className='sound-icon' onClick={() => playSound(name)}>
        <i class='fa-solid fa-circle-play'></i>
      </div>
      <h3>{name}</h3>
      <div className='card-likes-area'>
        <button className='btn like-btn' onClick={() => likesHandler(name, -1)}>
          -
        </button>
        <Likes likes={likes} />
        <button className='btn like-btn' onClick={() => likesHandler(name, +1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
