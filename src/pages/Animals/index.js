import { animalsData } from '../../data/animalsList';
import { useCards } from '../../hooks/useCards';
import Cards from '../../components/Cards';

const Animals = () => {
  const [animals, handleAnimals] = useCards(animalsData);

  return (
    <main>
      <Cards cards={animals} handleCards={handleAnimals} />
    </main>
  );
};

export default Animals;
