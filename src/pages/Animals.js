import { animalsData } from '../data/animalsList';
import { useCards } from '../hooks/useCards';
import Cards from './components/Cards';

const Animals = () => {
  const [animals, removeCard, handleLikes] = useCards(animalsData);

  return (
    <main>
      <h2>Animals</h2>
      <Cards
        cards={animals}
        removeCard={removeCard}
        handleLikes={handleLikes}
      />
    </main>
  );
};

export default Animals;
