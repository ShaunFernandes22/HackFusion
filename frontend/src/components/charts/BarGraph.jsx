import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarGraph = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['Confusion', 'Engagement', 'Frustration', 'Excitement', 'Satisfaction', 'Boredom'],
      datasets: [
        {
          label: 'Emotion Index',
          data: [8, 2, 4, 5, 14, 7],
          backgroundColor: [  'rgba(255, 99, 132, 0.2)', // Red
          'rgba(54, 162, 235, 0.2)', // Blue
          'rgba(255, 206, 86, 0.2)', // Yellow
          'rgba(75, 192, 192, 0.2)', // Green
          'rgba(153, 102, 255, 0.2)', // Purple
          'rgba(255, 159, 64, 0.2)', // Orange
        ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
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
  }, []);

  return <canvas ref={chartRef} height={300}/>;
};

export default BarGraph;
