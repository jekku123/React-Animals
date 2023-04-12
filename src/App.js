/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import List from './pages/List';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchContextProvider } from './context/SearchContext';
import { useCards } from './hooks/useCards';
import { animalsData, birdsData } from './data/animalsList';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useEffect } from 'react';

const App = () => {
  const [birdStorage, setBirdStorage] = useLocalStorage('birds', birdsData);
  const [animalStorage, setAnimalStorage] = useLocalStorage(
    'animals',
    animalsData
  );

  const [animals, removeAnimal, handleAnimalLikes] = useCards(animalStorage);
  const [birds, removeBird, handleBirdLikes] = useCards(birdStorage);

  useEffect(() => {
    setAnimalStorage(animals);
  }, [animals]);

  useEffect(() => {
    setBirdStorage(birds);
  }, [birds]);

  return (
    <>
      <SearchContextProvider>
        <BrowserRouter>
          <Header animals={animals} birds={birds} />
          <Routes>
            <Route index element={<Home />} />
            <Route
              path='/animals'
              element={
                <List
                  cards={animals}
                  removeCard={removeAnimal}
                  handleLikes={handleAnimalLikes}
                />
              }
            />
            <Route
              path='/birds'
              element={
                <List
                  cards={birds}
                  removeCard={removeBird}
                  handleLikes={handleBirdLikes}
                />
              }
            />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </SearchContextProvider>
    </>
  );
};

export default App;
