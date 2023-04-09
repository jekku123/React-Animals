import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
