import { useSearchHandler } from '../../context/SearchContext';
import './styles/index.css';

const SearchBar = () => {
  const searchHandler = useSearchHandler();

  return <input onChange={searchHandler} placeholder='Search..' />;
};

export default SearchBar;
