import Card from '../features/Card';
import { useAnimals } from '../../context/AnimalContext';
import './styles/index.css';

const Animals = ({ searchInput }) => {
  const animals = useAnimals();
  return (
    <main>
      {animals.reduce((animals, animal) => {
        if (animal.name.includes(searchInput.toLowerCase())) {
          return [...animals, <Card key={animal.name} animal={animal} />];
        }
        return animals;
      }, [])}
    </main>
  );
};

export default Animals;
