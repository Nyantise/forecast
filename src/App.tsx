import { useContext, useState } from 'react';
import styled from 'styled-components';
import { getForecast, getWeather } from './api';
import Info from './components/info';
import Search from './components/search';
import { ColorContext } from './globalProvider';


function App() {
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const {color} = useContext(ColorContext)

  const handleSearch = async (cityName: string) => {
    try {
      if(cityName === "") return
      
      setWeather(await getWeather(cityName));
      
      const resp = await getForecast(cityName);
      setForecast(resp.list.map((item: any) => ({
        date: item.dt_txt.split(' ')[0],
        temperature: item.main.temp
      })));

      console.log(weather, forecast)
    } catch (error) {
      console.error("Error while searching", error);
    }
  };

  return (
    <Container color={color}>
      <h1>Levo um casaquinho?</h1>
      <Search onSearch={handleSearch} />
      {weather && <Info data={weather} />}
    </Container>
  );
}

export default App


// S T Y L E //
const Container = styled.div`
    display: flex;
    flex-direction: column;
    transition: all 0.4s;
    h1 {
        color: ${props => props.color};
        font-size: 36px;
    }
`