import { Link } from 'react-router-dom';
import './styles/index.css';

const Home = () => {
  return (
    <main>
      <div className='home-flex-container'>
        <div className='home-flex'>
          <Link to='/animals'>Animals</Link>
          <img src={`https://source.unsplash.com/500x400/?fox`} alt='fox' />
        </div>
        <div className='home-flex'>
          <Link to='/birds'>Birds</Link>
          <img
            src={`https://source.unsplash.com/500x400/?bird`}
            alt='bird'
          ></img>
        </div>
      </div>
    </main>
  );
};

export default Home;
