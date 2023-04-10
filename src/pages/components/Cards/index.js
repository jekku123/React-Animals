import './styles/index.css';
import Card from '../Card';
import { useSearch } from '../../../context/SearchContext';

const Cards = ({ cards, handleCards }) => {
  const search = useSearch();

  const removeHandler = (name) => {
    handleCards({
      type: 'REMOVE',
      payload: { name },
    });
  };

  const likesHandler = (name, value) => {
    handleCards({
      type: 'HANDLE_LIKES',
      payload: { name, value },
    });
  };

  const playSound = (name) => {
    const sound = new Audio(
      `https://www.google.com/logos/fnbx/animal_sounds/${name}.mp3`
    );
    sound.play();
  };

  return (
    <div className='cards'>
      {cards.reduce((prevCards, card) => {
        if (card.name.toLowerCase().includes(search.toLowerCase())) {
          return [
            ...prevCards,
            <Card
              key={card.name}
              name={card.name}
              likes={card.likes}
              removeHandler={removeHandler}
              likesHandler={likesHandler}
              playSound={playSound}
            />,
          ];
        }
        return prevCards;
      }, [])}
    </div>
  );
};

export default Cards;
