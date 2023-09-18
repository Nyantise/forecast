import React, { useContext } from 'react';
import styled from 'styled-components';
import { ColorContext } from '../globalProvider';

interface WeatherData {
  city: string;
  minTemp: number;
  maxTemp: number;
  temp: number;
  status: string;
}

type Weathers = "Clear" | "Clouds" | "Rain" | "Snow" | "Thunderstorm" | "Drizzle" | "Mist";
const weathers = {
  Clear: ["Céu aberto", "#f8c621"],
  Clouds: ["Nublado", "#39393f"],
  Rain: ["Chovendo", "#214cf8"],
  Snow: ["Nevando", "#494952"],
  Thunderstorm: ["Tempestade", "#6c3fea"],
  Drizzle: ["Chuviscando", "#2185f8"],
  Mist: ["Neblina", "#494952"]
}

const Info: React.FC<{ data: any }> = ({ data }) => {
  const {color, setColor} = useContext(ColorContext)
  const {name, main, weather} = data

  const refac: WeatherData = {
    city: name,
    temp: main.temp,
    maxTemp: main.temp_max,
    minTemp: main.temp_min,
    status: weather[0].main
  }
  function getStatus(status:string){
    const val = status as Weathers 
    return weathers[val]
  }

  setColor(getStatus(refac.status)[1])
  return (
    <Container color={color}>
      <div className='left'>
        <h2>Agora: {refac.city}</h2>
        <p>Mínima: {refac.minTemp}°C</p>
        <p>Máxima: {refac.maxTemp}°C</p>
      </div>
      <div className='right'>
        <p>{getStatus(refac.status)[0]}</p>
        <h2>{refac.temp}°C</h2>
      </div>
    </Container>
  );
};

export default Info;


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: ${props => props.color};
  transition: all 0.4s;
  margin: 20px 0;

  .left {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
      font-size: 24px;
      margin: 0;
    }

    p {
      font-size: 18px;
      margin: 0;
    }
  }

  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    h2 {
      font-size: 32px;
      margin: 0;
    }

    p {
      font-size: 18px;
      margin: 0;
    }
  }
`;
