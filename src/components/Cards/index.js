import './styles/index.css';
import Card from '../Card';
import { useSearch } from '../../context/SearchContext';

const Cards = ({ data, handleData }) => {
  const search = useSearch();

  return (
    <div className='cards'>
      {data.reduce((prevData, creature) => {
        if (creature.name.toLowerCase().includes(search.toLowerCase())) {
          return [
            ...prevData,
            <Card
              key={creature.name}
              data={creature}
              handleData={handleData}
            />,
          ];
        }
        return prevData;
      }, [])}
    </div>
  );
};

export default Cards;
