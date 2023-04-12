import SearchBar from '../../ui/SearchBar';
import NavBar from '../../ui/NavBar';
import { useLocation } from 'react-router-dom';
import './styles/index.css';
import AddBar from '../../ui/AddBar';

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

export default Header;
