import './styles/index.css';
import CardImage from './components/CardImage';
import Likes from './components/Likes';
import Button from './components/Button';
import SoundIcon from './components/SoundIcon';

const Card = ({ name, likes, removeCard, addLikes, removeLikes }) => {
  return (
    <div className='card'>
      <Button text='X' type='remove' handler={removeCard} />
      <CardImage name={name} />
      <h3>
        {name} <SoundIcon name={name} />
      </h3>
      <div className='card-likes-area'>
        <Button text='-' type='like' handler={removeLikes} />
        <Likes likes={likes} />
        <Button text='+' type='like' handler={addLikes} />
      </div>
    </div>
  );
};

export default Card;
