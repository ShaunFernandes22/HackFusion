import React from 'react';
import BarGraph from './charts/BarGraph';

const Card = ({children}) => {
  return (
    <div className='w-full flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        {children}
    </div>
  );
};

export default Card;
