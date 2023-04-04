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
    setAnimals((prevAnimals) =>
      prevAnimals.filter((animal) => animal.name !== e.target.name)
    );
  };

  return (
    <main>
      {animals.reduce((animals, animal) => {
        if (!search || animal.name.includes(search)) {
          return [
            ...animals,
            <Card
              key={animal.name}
              animal={animal}
              setAnimals={setAnimals}
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

// ASK WHICH WAY TO USE

// WHY SCROLL-MARGIN-TOP NO WORK

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
