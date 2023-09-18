import React, { useContext } from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import styled from 'styled-components';
import { ColorContext } from '../globalProvider';

interface Data {
  date: string;
  temperature: number;
}

const Chart: React.FC<{ data: Data[] }> = ({ data }) => {
  const {color} = useContext(ColorContext)

  return (
    <Container>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data} margin={{ top: 10, right: 0, bottom: 10, left: -20 }}>
          <Line type="natural" dataKey="temperature" stroke={color} />
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="date" /> 
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};

export default Chart;


// S T Y L E //
const Container = styled.div`
  margin: 20px 0;
  border-radius: 4px;
`;
