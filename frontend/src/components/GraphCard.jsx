import React from 'react';

const GraphCard = ({children}) => {
  return (
    <div className='w-full flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        {children}
    </div>
  );
};

export default GraphCard;
