import React from 'react';
import Card from './Card';
import BarGraph from './charts/BarGraph';
import LineGraph from './charts/LineGraph';

const Charts = () => {
  return (
    <div className='w-full h-full py-2 px-4'>
      <div className='max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8'>
        <Card> <BarGraph/> </Card>
        <Card> <LineGraph/> </Card>
      </div>
    </div>
  );
};  

export default Charts;
