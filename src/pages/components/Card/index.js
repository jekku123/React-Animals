import './styles/index.css';
import CardImage from '../CardImage';
import Likes from '../Likes';
import Button from '../Button';
import SoundIcon from '../SoundIcon';

const Card = ({ name, likes, removeCard, handleLikes }) => {
  return (
    <div className='card'>
      <Button text='X' type='remove' handler={() => removeCard(name)} />
      <CardImage name={name} />
      <SoundIcon name={name} />
      <h3>{name}</h3>
      <div className='card-likes-area'>
        <Button text='-' type='like' handler={() => handleLikes(name, -1)} />
        <Likes likes={likes} />
        <Button text='+' type='like' handler={() => handleLikes(name, +1)} />
      </div>
    </div>
  );
};

export default Card;
