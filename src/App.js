import Animals from './components/Animals';
import Header from './components/Header';
import { useState } from 'react';
import { animalsData } from './data/animalsList.js';
import './App.css';

function App() {
  const [animals, setAnimals] = useState(animalsData);
  const [search, setSearch] = useState('');

  return (
    <div className='App'>
      <Header animals={animals} search={search} setSearch={setSearch} />
      <Animals animals={animals} setAnimals={setAnimals} search={search} />
    </div>
  );
}

export default App;
