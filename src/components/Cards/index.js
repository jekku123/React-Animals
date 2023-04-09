import './styles/index.css';
import Card from '../Card';
import { useSearch } from '../../context/SearchContext';

const Cards = ({ cards, handleCards }) => {
  const search = useSearch();

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
              handleCards={handleCards}
            />,
          ];
        }
        return prevCards;
      }, [])}
    </div>
  );
};

export default Cards;
