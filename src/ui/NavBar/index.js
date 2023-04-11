import { NavLink } from 'react-router-dom';
import './styles/index.css';

const NavBar = ({ animals, birds }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/animals'>Animals ({animals.length})</NavLink>
        </li>
        <li>
          <NavLink to='/birds'>Birds ({birds.length})</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
