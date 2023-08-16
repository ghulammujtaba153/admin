import React, { useEffect, useState } from 'react';
import BarChart from './BarChart';
import { fetchBasicStats } from '../../Redux/actions/adminActions';
import SkeletonColor from './../skeleton/Skeleton';

const Chart = () => {
  const [stats, setStats] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading]=useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchBasicStats();
        setStats(res);
        setLoading(false)

        if (res) {
          setChartData({
            labels: ['Users', 'Orders', 'Earnings'],
            datasets: [
              {
                label: 'Statistics',
                backgroundColor: 'rgba(75, 192, 192, 0.4)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                data: [
                  res.totalUsers,
                  res.totalOrders,
                  res.totalAmount, // Adjust field name as needed
                  
                ]
              }
            ]
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    {
      loading? <SkeletonColor width={500} height={300}/>
      :

      <div>  
        {chartData && <BarChart data={chartData} />}
      </div>

    }
    
    
    </>
    
  );
};


export default Chart;
