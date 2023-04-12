import './styles/index.css';
import CardImage from './components/CardImage';
import Likes from './components/Likes';
import Button from './components/Button';
import SoundIcon from './components/SoundIcon';

const Card = ({ name, likes, removeCard, handleLikes }) => {
  return (
    <div className='card'>
      <Button text='X' type='remove' handler={() => removeCard(name)} />
      <CardImage name={name} />
      <h3>
        {name} <SoundIcon name={name} />
      </h3>
      <div className='card-likes-area'>
        <Button text='-' type='like' handler={() => handleLikes(name, -1)} />
        <Likes likes={likes} />
        <Button text='+' type='like' handler={() => handleLikes(name, +1)} />
      </div>
    </div>
  );
};

export default Card;
