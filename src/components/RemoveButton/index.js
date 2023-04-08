const RemoveButton = ({ name, handler }) => {
  return (
    <button className='btn remove-btn' onClick={handler} name={name}>
      x
    </button>
  );
};

export default RemoveButton;
