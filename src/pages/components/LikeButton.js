const LikeButton = ({ handleLikes, name, value }) => {
  return (
    <button
      className='btn like-btn'
      onClick={handleLikes}
      name={name}
      value={value}
    >
      {value > 0 ? '+' : '-'}
    </button>
  );
};

export default LikeButton;
