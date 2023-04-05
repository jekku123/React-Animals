import Card from '../components/Card';
import './styles/index.css';

const Animals = ({ animals, searchInput, handleLikes, removeAnimal }) => {
  return (
    <main>
      {animals.reduce((animals, animal) => {
        if (animal.name.includes(searchInput.toLowerCase())) {
          return [
            ...animals,
            <Card
              key={animal.name}
              animal={animal}
              handleLikes={handleLikes}
              removeAnimal={removeAnimal}
            />,
          ];
        }
        return animals;
      }, [])}
    </main>
  );
};

export default Animals;
