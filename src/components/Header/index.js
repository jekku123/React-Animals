import SearchBar from '../../ui/SearchBar';
import NavBar from '../../ui/NavBar';
import { useLocation } from 'react-router-dom';
import './styles/index.css';

const Header = (props) => {
  const location = useLocation();

  return (
    <header>
      <div className='header-flex'>
        <h1>Animals App</h1>
        {location.pathname !== '/' && location.pathname !== '/about' && (
          <SearchBar />
        )}
        <NavBar {...props} />
      </div>
    </header>
  );
};

export default Header;
