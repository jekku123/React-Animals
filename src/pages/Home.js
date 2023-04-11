import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <div className='about'>
        <h2>Home page!</h2>
        <div className='home-animals'>
          <Link to='/animals'>Animals</Link>
        </div>
        <div className='home-birds'>
          <Link to='/birds'>Birds</Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
