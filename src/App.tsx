import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import Country from './country/Country';
import Header from './header/Header';
import Search from './search/Search';
import Filter from './filter/Filter';
interface ICountry {
  flags: {
    png: string; 
    svg:string;
  };
    name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string;
  nativeName: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  subregion: string;
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
}

function App() {
  const [data, setData] = useState<ICountry[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async() => {
      try{
        setLoading(true);
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setData(response.data);
        console.log(response.data);
      }catch(error){
        setError(error as string);
      }finally{
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  if(loading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>There was an error: {error}</div>;
  }
 
 
  return(
    <>
    <Header/>
    <div style={{
          display:'flex',
          justifyContent:'space-between',
          position:'relative',
          padding:'10px 10%'
        }}>
        <Search/>
        <Filter optionType = "Region" option1="Africa" option2="America" option3="Asia" option4="Europe"/>
    </div>
    <div>
        <div style={{
          margin:'0 10%',
          display:'flex',
          flexWrap:'wrap',
          justifyContent:'center',
          alignItems:'center',
          gap:'5%',
        }}>
        {data?.map((item: ICountry) => (
          <Country
            key={item.name.common}
            flags={item.flags}
            name={item.name.common}
            population={item.population}
            region={item.region}
            capital={item.capital}
          />
        ))}
      </div>
    </div>
  </>
  )

}

export default App
