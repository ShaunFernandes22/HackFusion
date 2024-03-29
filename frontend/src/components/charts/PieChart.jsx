import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['Excited', 'Confused', 'Boredom', 'Engaged', 'Other'],
      datasets: [
        {
          label: 'Time Divisions',
          data: [7, 9, 10, 19, 15],
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    const options = {
      animation: {
        duration: 2000,
      },
      cutout: '50%'
    };

    const chart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options,
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} height={300}/>;
};

export default DoughnutChart;
