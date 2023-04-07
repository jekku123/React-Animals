import './App.css';
import Header from './ui/Header';
import Animals from './pages/Animals';
import { useInput } from './hooks/useInput';

const App = () => {
  const [searchInput, searchHandler] = useInput('');

  return (
    <>
      <Header searchHandler={searchHandler} />
      <Animals searchInput={searchInput} />
    </>
  );
};

export default App;
