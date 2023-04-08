import { useSearchHandler } from '../../context/SearchContext';

const SearchBar = () => {
  const searchHandler = useSearchHandler();

  return <input onChange={searchHandler} placeholder='Search..' />;
};

export default SearchBar;
