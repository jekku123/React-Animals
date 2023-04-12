import { Link } from 'react-router-dom';
import './styles/index.css';

const Home = () => {
  return (
    <main>
      <div className='home-flex-container'>
        <div className='animals-flex'>
          <Link to='/animals'>Animals</Link>
        </div>
        <div className='birds-flex'>
          <Link to='/birds'> Birds</Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
