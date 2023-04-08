const LikeButton = ({ handler, name, value }) => {
  return (
    <button
      className='btn like-btn'
      onClick={handler}
      name={name}
      value={value}
    >
      {value > 0 ? '+' : '-'}
    </button>
  );
};

export default LikeButton;
