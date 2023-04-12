import { useContext } from 'react';
import { SearchContext, SearchHandlerContext } from '../context/SearchContext';

export const useSearchContext = () => {
  return useContext(SearchContext);
};

export const useSearchContextHandler = () => {
  return useContext(SearchHandlerContext);
};
