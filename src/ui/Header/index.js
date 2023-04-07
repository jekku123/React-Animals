import './styles/index.css';
import SearchBar from '../SearchBar';
import AddBar from '../AddBar';

const Header = ({ searchHandler }) => {
  return (
    <header>
      <h1>Animals App</h1>
      <AddBar placeholder={'Add an animal'} />
      <SearchBar handler={searchHandler} placeholder='Search for an animal' />
    </header>
  );
};

export default Header;
