import { useSearchContextHandler } from '../../hooks/useSearch';
import './styles/index.css';

const SearchBar = () => {
  const searchHandler = useSearchContextHandler();

  return <input onChange={searchHandler} placeholder='Search..' />;
};

export default SearchBar;
