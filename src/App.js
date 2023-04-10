import './App.css';
import Header from './ui/Header';
import About from './pages/About';
import Animals from './pages/Animals';
import Birds from './pages/Birds';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchContextProvider } from './context/SearchContext';

const App = () => {
  return (
    <>
      <SearchContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<About />} />
            <Route path='/animals' element={<Animals />} />
            <Route path='/birds' element={<Birds />} />
          </Routes>
        </BrowserRouter>
      </SearchContextProvider>
    </>
  );
};

export default App;
