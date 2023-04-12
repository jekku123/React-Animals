import './styles/index.css';

const Button = ({ text, type, handler }) => {
  return (
    <button className={`btn ${type}-btn`} onClick={handler}>
      {text}
    </button>
  );
};

export default Button;
