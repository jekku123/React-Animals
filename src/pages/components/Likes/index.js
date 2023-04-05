import LikeButton from '../LikeButton';
import LikeCount from '../LikeCount';
import './styles/index.css';

const Likes = ({ handleLikes, animal }) => {
  return (
    <div className='card-likes-area'>
      <LikeButton handleLikes={handleLikes} name={animal.name} value={-1} />
      <LikeCount animal={animal} />
      <LikeButton handleLikes={handleLikes} name={animal.name} value={+1} />
    </div>
  );
};

export default Likes;
