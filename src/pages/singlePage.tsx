import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../header/Header";
import { Button } from "@mui/material";
import { useParams, Link } from "react-router-dom";

interface ISingleCountry {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
  };
  nativeName: {
    official: string;
    common: string;
  };
  population: number;
  subregion: string;
  capital: string[];
  topLevelDomain: string[];
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages: {
    [key: string]: string;
  };
  borderCountries?: string[];
  cca3: string;
}

const SinglePage = () => {
  const { name } = useParams<{ name: string }>();
  const [singleCountry, setSingleCountry] = useState<ISingleCountry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        setLoading(true); 
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
        setSingleCountry(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching country:", error);
        setLoading(false); 
      }
    };

    fetchCountry();
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!singleCountry) {
    return <div>Country not found</div>;
  }

  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <Header />
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button style={{ backgroundColor: 'grey', width: '130px', marginLeft: '5%' }} variant="contained">Back</Button>
      </Link>
      <div style={{display:'flex',  flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <img width='40%' src={singleCountry.flags.png} alt={singleCountry.name?.common} />
        <h2>{singleCountry.name?.common}</h2>
        <div style={{display:'flex',
        flexDirection:'column',
        flexWrap:'wrap',
        width:'100vw',
        height:'90px',
        justifyContent:'center',
        alignItems:'center'
        }}>
          <p>Native Name: {singleCountry.nativeName?.common}</p>
          <p>Population: {singleCountry.population}</p>
          <p>Region: {singleCountry.subregion}</p>
          <p>Capital: {singleCountry.capital?.[0]}</p>
          <p>Top Level Domain: {singleCountry.topLevelDomain?.join(", ")}</p>
          <p>Currency: {singleCountry.currencies?.[Object.keys(singleCountry.currencies)[0]].name} ({singleCountry.currencies?.[Object.keys(singleCountry.currencies)[0]].symbol})</p>
          <p>Languages: {Object.values(singleCountry.languages)?.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
