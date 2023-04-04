import './styles/index.css';

const Header = ({ search, setSearch }) => {
  const searchAnimals = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header>
      <h1>Animals App</h1>
      <input
        type='text'
        value={search}
        onChange={searchAnimals}
        placeholder='Search for animal'
      />
    </header>
  );
};

export default Header;
