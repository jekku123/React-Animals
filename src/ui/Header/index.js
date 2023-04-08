import './styles/index.css';
import SearchBar from '../SearchBar';
// import AddBar from '../AddBar';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const keke = useLocation();

  return (
    <header>
      <div className='header-flex'>
        <h1>Animals App</h1>
        {keke.pathname !== '/' && <SearchBar placeholder='Search..' />}
        <nav>
          <ul>
            <li>
              <Link to='/'>About</Link>
            </li>
            <li>
              <Link to='/animals'>Animals</Link>
            </li>
            <li>
              <Link to='/birds'>Birds</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* <AddBar placeholder={'Add an animal'} /> */}
    </header>
  );
};

export default Header;
