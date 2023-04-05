import './styles/index.css';
import Search from '../Search';

const Header = ({ animalToAdd, searchAnimals, addAnimal, handleAddInput }) => {
  const handleEnterSubmit = (e) => {
    if (e.key === 'Enter') {
      addAnimal();
    }
  };

  return (
    <header>
      <h1>Animals App</h1>
      <div className='add-animal-area'>
        <input
          type='text'
          value={animalToAdd}
          onChange={handleAddInput}
          onKeyDown={handleEnterSubmit}
          placeholder='Add an animal'
        />
        <button className='add-btn' onClick={addAnimal}>
          Add
        </button>
      </div>
      <Search
        searchAnimals={searchAnimals}
        placeholder='Search for an animal'
      />
    </header>
  );
};

export default Header;
