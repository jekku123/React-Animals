import Card from '../Card';
import './styles/index.css';

const Animals = ({ animals, search, handleLikes, removeAnimal }) => {
  return (
    <main>
      {animals.reduce((animals, animal) => {
        if (animal.name.includes(search.toLowerCase())) {
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
