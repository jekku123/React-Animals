import Card from '../Card';
import './styles/index.css';

const Animals = ({ animals, setAnimals, search }) => {
  const addLike = (e) => {
    setAnimals(
      animals.map((animal) => {
        if (animal.name === e.target.value) {
          return { ...animal, likes: animal.likes + 1 };
        }
        return animal;
      })
    );
  };

  const removeLike = (e) => {
    setAnimals(
      animals.map((animal) => {
        if (animal.name === e.target.value) {
          return { ...animal, likes: animal.likes - 1 };
        }
        return animal;
      })
    );
  };

  const removeAnimal = (e) => {
    setAnimals(animals.filter((animal) => animal.name !== e.target.value));
  };

  return (
    <div className='animals'>
      {animals.reduce((animals, animal) => {
        if (!search || animal.name.includes(search)) {
          return [
            ...animals,
            <Card
              key={animal.name}
              {...{ animal, setAnimals, addLike, removeLike, removeAnimal }}
            />,
          ];
        }
        return animals;
      }, [])}
    </div>
  );
};

export default Animals;

// ASK WHICH WAY TO USE

// animals.map((animal) => {
//   if (!search || animal.name.includes(search)) {
//     return (
//       <Card
//         key={animal.name}
//         animal={animal}
//         setAnimals={setAnimals}
//         addLike={addLike}
//         removeLike={removeLike}
//         removeAnimal={removeAnimal}
//       />
//     );
//   }
//   return '';
// })

// animals
// .filter((animal) => animal.name.includes(search))
// .map((animal) => (
// if (animal.name.includes(search)) {
//   <Card
//     key={animal.name}
//     animal={animal}
//     setAnimals={setAnimals}
//     addLike={addLike}
//     removeLike={removeLike}
//     removeAnimal={removeAnimal}
//   />
// ))
// }
