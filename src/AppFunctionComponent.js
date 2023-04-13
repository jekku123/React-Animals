/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import List from './pages/List';
import ScrollButton from './ui/ScrollTop';

import { SearchContextProvider } from './context/SearchContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useCards } from './hooks/useCards';

import { animalsData, birdsData } from './data/animalsList';

const App = () => {
  const [birdStorage, setBirdStorage] = useLocalStorage('birds', birdsData);
  const [animalStorage, setAnimalStorage] = useLocalStorage(
    'animals',
    animalsData
  );

  const [birds, removeBird, handleBirdLikes, addBird] = useCards(birdStorage);
  const [animals, removeAnimal, handleAnimalLikes, addAnimal] =
    useCards(animalStorage);

  useEffect(() => {
    setBirdStorage(birds);
  }, [birds]);

  useEffect(() => {
    setAnimalStorage(animals);
  }, [animals]);

  return (
    <>
      <SearchContextProvider>
        <BrowserRouter>
          <Header
            animals={animals}
            birds={birds}
            addAnimal={addAnimal}
            addBird={addBird}
          />

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
          <ScrollButton />
        </BrowserRouter>
      </SearchContextProvider>
    </>
  );
};

export default App;
