import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy(); // Destroy existing chart
    }

    if (data && data.labels && data.datasets) {
      const ctx = chartRef.current.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy(); // Destroy chart instance when component unmounts
      }
    };
  }, [data]);

  return <canvas ref={chartRef} height={400} width={600}/>;
};

export default BarChart;
