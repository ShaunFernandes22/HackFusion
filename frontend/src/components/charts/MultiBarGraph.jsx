import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MultiBarGraph = ({ excitementData, confusionData }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['10:00', '10:10', '10:20', '10:30', '10:40', '10:50'],
      datasets: [
        {
          label: 'Average Excitement',
          data: [2, 4, 7, 3, 6],
          backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color for excitement
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
        {
          label: 'Average Confusion',
          data: [4, 6, 10, 2, 17],
          backgroundColor: 'rgba(255, 99, 132, 0.5)', // Red color for confusion
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };

    const options = {
      animation: {
        duration: 2000,
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };

    const chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    return () => {
      chart.destroy();
    };
  }, [excitementData, confusionData]);

  return <canvas ref={chartRef} height={300} />;
};

export default MultiBarGraph;
