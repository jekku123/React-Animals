import { Link } from 'react-router-dom';
import './styles/index.css';

const Home = () => {
  return (
    <main>
      <div className='grid-home'>
        <Link to='/animals'>
          <div className='grid-card animals'>
            <h2>Animals</h2>
          </div>
        </Link>
        <Link to='/birds'>
          <div className='grid-card birds'>
            <h2>Birds</h2>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Home;
