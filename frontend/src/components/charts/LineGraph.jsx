import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['10:00', '10:10', '10:20', '10:30', '10:40', '10:50'],
      datasets: [
        {
          label: 'Attention levels',
          data: [0, 4, 2, 6, 8, 5],
          fill: false,
          borderColor: 'rgba(54, 162, 235, 1)',
          tension: 0.1,
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
      type: 'line',
      data: data,
      options: options,
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} height={300} />;
};

export default LineGraph;
