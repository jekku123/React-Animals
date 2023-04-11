import './styles/index.css';
import Card from '../components/Card';
import { useSearchContext } from '../../context/SearchContext';

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
                removeCard={removeCard}
                handleLikes={handleLikes}
              />,
            ];
          }
          return prevCards;
        }, [])}
      </div>
    </main>
  );
};

export default List;
