import './styles/index.css';
import CardImage from '../CardImage';
import Likes from '../Likes';
import Button from '../Button';
import SoundIcon from '../SoundIcon';

const Card = ({ name, likes, removeHandler, likesHandler, playSound }) => {
  return (
    <div className='card'>
      <Button text='X' type='remove' handler={() => removeHandler(name)} />
      <CardImage name={name} />
      <SoundIcon handler={() => playSound(name)} />
      <h3>{name}</h3>
      <div className='card-likes-area'>
        <Button text='-' type='like' handler={() => likesHandler(name, -1)} />
        <Likes likes={likes} />
        <Button text='+' type='like' handler={() => likesHandler(name, +1)} />
      </div>
    </div>
  );
};

export default Card;
