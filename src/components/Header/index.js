import './styles/index.css';
import { useLocation } from 'react-router-dom';

import SearchBar from '../../ui/SearchBar';
import NavBar from '../../ui/NavBar';
import AddBar from '../../ui/AddBar';

const Header = ({ animals, birds, addHandler }) => {
  const location = useLocation();
  console.log('hi');

  return (
    <header>
      <div className='header-flex'>
        <h1>Animals App</h1>
        {location.pathname !== '/' && location.pathname !== '/about' && (
          <>
            <SearchBar />
            <AddBar addCard={addHandler} location={location} />
          </>
        )}
        <NavBar animals={animals} birds={birds} />
      </div>
    </header>
  );
};

// For App function component
/*
const Header = ({ animals, birds, addAnimal, addBird }) => {
  const location = useLocation();

  return (
    <header>
      <div className='header-flex'>
        <h1>Animals App</h1>
        {location.pathname !== '/' && location.pathname !== '/about' && (
          <>
            <SearchBar />
            <AddBar
              addCard={location.pathname === '/animals' ? addAnimal : addBird}
            />
          </>
        )}
        <NavBar animals={animals} birds={birds} />
      </div>
    </header>
  );
};
*/

export default Header;
