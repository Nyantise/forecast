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
    padding: 10px;
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 4px;
    outline: none;
    width: 100%;
    transition: border-color 0.3s;
    border-color: ${props => props.color};
  }
  
  button{
    padding: 10px 15px;
    font-size: 16px;
    background-color:${props => props.color};;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
`;