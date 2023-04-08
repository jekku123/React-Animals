import { createContext, useContext } from 'react';
import { useInput } from '../hooks/useInput';

export const SearchContext = createContext(null);
export const SearchHandlerContext = createContext(null);

export const useSearch = () => {
  return useContext(SearchContext);
};

export const useSearchHandler = () => {
  return useContext(SearchHandlerContext);
};

export const SearchContextProvider = ({ children }) => {
  const [searchInput, searchHandler] = useInput('');

  return (
    <SearchContext.Provider value={searchInput}>
      <SearchHandlerContext.Provider value={searchHandler}>
        {children}
      </SearchHandlerContext.Provider>
    </SearchContext.Provider>
  );
};
