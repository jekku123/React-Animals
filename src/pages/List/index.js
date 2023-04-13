import './styles/index.css';
import Card from '../../components/Card';
import { useSearchContext } from '../../hooks/useSearch';

const List = ({ title, cards, removeCard, handleLikes }) => {
  const search = useSearchContext();

  return (
    <main>
      <div className='cards'>
        {cards.reduce((prevCards, card) => {
          if (card.name.toLowerCase().includes(search.toLowerCase())) {
            return [
              ...prevCards,
              <Card
                key={card.name}
                name={card.name}
                likes={card.likes}
                removeCard={() => removeCard(card.name, title)}
                addLikes={() => handleLikes(card.name, +1, title)}
                removeLikes={() => handleLikes(card.name, -1, title)}
              />,
            ];
          }
          return prevCards;
        }, [])}
      </div>
    </main>
  );
};

// For App function component
/*
const List = ({ cards, removeCard, handleLikes }) => {
  const search = useSearchContext();

  return (
    <main>
      <div className='cards'>
        {cards.reduce((prevCards, card) => {
          if (card.name.toLowerCase().includes(search.toLowerCase())) {
            return [
              ...prevCards,
              <Card
                key={card.name}
                name={card.name}
                likes={card.likes}
                removeCard={() => removeCard(card.name)}
                removeLikes={() => handleLikes(card.name, -1)}
                addLikes={() => handleLikes(card.name, +1)}
              />,
            ];
          }
          return prevCards;
        }, [])}
      </div>
    </main>
  );
};
*/

export default List;
