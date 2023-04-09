import './styles/index.css';
import SearchBar from '../SearchBar';
// import AddBar from '../AddBar';
import { useLocation } from 'react-router-dom';
import NavBar from '../NavBar';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <div className='header-flex'>
        <h1>Animals App</h1>
        {location.pathname !== '/' && <SearchBar />}
        <NavBar />
      </div>
      {/* <AddBar placeholder={'Add an animal'} /> */}
    </header>
  );
};

export default Header;
