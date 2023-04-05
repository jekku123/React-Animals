import './styles/index.css';
import SearchBar from '../SearchBar';
import AddBar from '../AddBar';

const Header = ({
  searchHandler,
  addAnimal,
  addAnimalInput,
  addAnimalInputHandler,
}) => {
  return (
    <header>
      <h1>Animals App</h1>
      <AddBar
        inputHandler={addAnimalInputHandler}
        placeholder={'Add an animal'}
        addAnimal={addAnimal}
        text={'Add'}
        value={addAnimalInput}
      />
      <SearchBar handler={searchHandler} placeholder='Search for an animal' />
    </header>
  );
};

export default Header;
