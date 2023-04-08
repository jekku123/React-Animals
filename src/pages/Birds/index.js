import { birdsData } from '../../context/animalsList';
import { useCards } from '../../hooks/useCards';
import Cards from '../../components/Cards';

const Birds = () => {
  const [birds, handleBirds] = useCards(birdsData);

  return (
    <>
      <Cards data={birds} handleData={handleBirds} />
    </>
  );
};

export default Birds;
