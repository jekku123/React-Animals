import { NavLink } from 'react-router-dom';
import './styles/index.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/animals'>Animals</NavLink>
        </li>
        <li>
          <NavLink to='/birds'>Birds</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
