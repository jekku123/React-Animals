import Card from '../Card';
import './styles/index.css';

const Animals = ({ animals, setAnimals, search }) => {
  const handleLikes = (e) => {
    setAnimals((prevAnimals) =>
      prevAnimals.map((animal) => {
        if (animal.name === e.target.name) {
          return { ...animal, likes: animal.likes + Number(e.target.value) };
        }
        return animal;
      })
    );
  };

  const removeAnimal = (e) => {
    const newAnimals = animals.filter(
      (animal) => animal.name !== e.target.name
    );
    setAnimals(newAnimals);
  };

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
