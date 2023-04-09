import { birdsData } from '../../data/animalsList';
import { useCards } from '../../hooks/useCards';
import Cards from '../../components/Cards';

const Birds = () => {
  const [birds, handleBirds] = useCards(birdsData);

  return (
    <main>
      <Cards cards={birds} handleCards={handleBirds} />
    </main>
  );
};

export default Birds;
