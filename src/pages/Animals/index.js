import { animalsData } from '../../context/animalsList';
import { useCards } from '../../hooks/useCards';
import Cards from '../../components/Cards';

const Animals = () => {
  const [animals, handleAnimals] = useCards(animalsData);

  return (
    <main>
      <Cards data={animals} handleData={handleAnimals} />
    </main>
  );
};

export default Animals;
