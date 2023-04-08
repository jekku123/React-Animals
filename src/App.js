import './App.css';
import { RouterProvider } from 'react-router-dom';
import { SearchContextProvider } from './context/SearchContext';
import { router } from './router/routes';

const App = () => {
  return (
    <>
      <SearchContextProvider>
        <RouterProvider router={router} />
      </SearchContextProvider>
    </>
  );
};

export default App;

// Simple way for routes :D
/* 
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<About />} />
        <Route path='/animals' element={<Animals />} />
        <Route path='/birds' element={<Birds />} />
      </Routes>
    </BrowserRouter> 
*/
