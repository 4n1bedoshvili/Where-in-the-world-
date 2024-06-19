import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './Country.css';

interface IProps {
  flags: {
    [key: string]: string;
  };
  name: string;
  population: number;
  region: string;
  capital: string;
}

const Country: FC<IProps> = ({ flags, name, population, region, capital }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${name}`);
  };

  return (
    <div className='mainComp' onClick={handleClick}>
      <img src={flags.png} alt={name} />
      <h2>{name}</h2>
      <b><p>Population: {population}</p></b>
      <b><p>Region: {region}</p></b>
      <b><p>Capital: {capital}</p></b>
    </div>
  );
};

export default Country;
