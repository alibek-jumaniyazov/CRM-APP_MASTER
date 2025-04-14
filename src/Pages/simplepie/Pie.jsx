import React from 'react';
import { PieChart, Pie, Cell, Label } from 'recharts';

const SimplePieChart = ({ color1, color2, value, fontSize = 14 }) => { // Added fontSize prop with default value

  const data = [
    { name: 'A', value: value, color: color1 },
    { name: 'B', value: 100 - value, color: color2 },
  ];
  
  return (
    <PieChart width={65} height={65}>
      <Pie
        data={data}
        cx={27}
        cy={27}
        innerRadius={20}
        outerRadius={30}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
        <Label 
          value={`${value}%`} 
          position="center"
          style={{ fontSize: fontSize }} // Applied fontSize prop
        />
      </Pie>
    </PieChart>
  );
};

export default SimplePieChart;
