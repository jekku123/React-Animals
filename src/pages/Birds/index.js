import { birdsData } from '../../data/animalsList';
import { useCards } from '../../hooks/useCards';
import Cards from '../components/Cards';

const Birds = () => {
  const [birds, removeHandler, handleLikes] = useCards(birdsData);

  return (
    <main>
      <Cards
        cards={birds}
        removeHandler={removeHandler}
        handleLikes={handleLikes}
      />
    </main>
  );
};

export default Birds;
