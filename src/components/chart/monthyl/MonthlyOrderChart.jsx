// components/MonthlyOrderChart.js

import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import SkeletonColor from '../../skeleton/Skeleton';

const MonthlyOrderChart = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading]=useState(true)

  useEffect(() => {
    const fetchMonthlyOrderCounts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/monthly-order-counts');
        const monthlyCounts = response.data;
        setLoading(false)
        // Prepare data for the chart
        const months = [];
        const counts = [];
        const monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        for (const item of monthlyCounts) {
          months.push(monthLabels[item._id-1]);
          counts.push(item.count);
        }

        setChartData({
          labels: months,
          datasets: [
            {
              label: 'Monthly Orders',
              data: counts,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching monthly order counts:', error);
      }
    };

    fetchMonthlyOrderCounts();
  }, []);

  return (
    <>
    {
      loading? <SkeletonColor width={500} height={300}/>
      :
      <div style={{ width: '40vw', height: '400px',padding:2 }}>
      {chartData && (
        <Bar
        width={200}
        height={200}
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                stepSize: 1,
              },
            },
          }}
        />
      )}
    </div>

    }
    
    
    </>
    
  );
};

export default MonthlyOrderChart;

