import './styles/index.css';
import CardImage from '../CardImage';
import LikeButton from '../LikeButton';
import LikeCount from '../LikeCount';
import RemoveButton from '../RemoveButton';

const Card = ({ data, handleData }) => {
  const removeHandler = () => {
    handleData({
      type: 'REMOVE',
      payload: { name: data.name },
    });
  };

  const likesHandler = (e) => {
    handleData({
      type: 'HANDLE_LIKES',
      payload: { name: data.name, value: e.target.value },
    });
  };

  return (
    <div className='card'>
      <RemoveButton name={data.name} handler={removeHandler} />
      <CardImage data={data.name} />
      <h3>{data.name}</h3>
      <div className='card-likes-area'>
        <LikeButton handler={likesHandler} name={data.name} value={-1} />
        <LikeCount likes={data.likes} />
        <LikeButton handler={likesHandler} name={data.name} value={+1} />
      </div>
    </div>
  );
};

export default Card;
