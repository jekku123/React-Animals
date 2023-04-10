import { birdsData } from '../data/animalsList';
import { useCards } from '../hooks/useCards';
import Cards from './components/Cards';

const Birds = () => {
  const [birds, removeCard, handleLikes] = useCards(birdsData);

  return (
    <main>
      <h2>Birds</h2>
      <Cards cards={birds} removeCard={removeCard} handleLikes={handleLikes} />
    </main>
  );
};

export default Birds;
