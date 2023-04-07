import Card from '../features/Card';
import './styles/index.css';

const Animals = ({ animals, searchInput, handleAnimals }) => {
  return (
    <main>
      {animals.reduce((animals, animal) => {
        if (animal.name.includes(searchInput.toLowerCase())) {
          return [
            ...animals,
            <Card
              key={animal.name}
              animal={animal}
              handleAnimals={handleAnimals}
            />,
          ];
        }
        return animals;
      }, [])}
    </main>
  );
};

export default Animals;
