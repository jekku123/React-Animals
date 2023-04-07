const LikeButton = ({ handleAnimals, name, value }) => {
  return (
    <button
      className='btn like-btn'
      onClick={() =>
        handleAnimals({
          type: 'HANDLE_LIKES',
          payload: { name, value },
        })
      }
      name={name}
      value={value}
    >
      {value > 0 ? '+' : '-'}
    </button>
  );
};

export default LikeButton;
