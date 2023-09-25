import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ColorContext } from '../globalProvider';

const Search: React.FC<{ onSearch: (city: string) => void }> = ({ onSearch }) => {
  const [city, setCity] = useState<string>('');
  const {color} = useContext(ColorContext)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(city);
  };

  return (
    <Container
    onSubmit={handleSubmit}
    color={color}
    >
      <input
        type="text"
        placeholder="Digite o nome da cidade"
        value={city}
        onChange={handleInputChange}
      />
      <button type="submit">Buscar</button>
    </Container>
  );
};
export default Search;


// S T Y L E //
export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 20px 0;

  input{
    padding: 8px;
    font-size: 16px;
    border: 4px solid #ccc;
    background-color:${props => adjust(props.color, -70)};
    border-radius: 8px;
    outline: none;
    width: 100%;
    border-color: ${props => props.color};
  }
  input::placeholder{
    color: #e0e1e9;
  }
  
  button{
    padding: 10px 15px;
    font-size: 16px;
    background-color:${props => props.color};
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

function adjust(color:string | undefined, amount:number) {
  if(color === undefined) return
  return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}