
import  { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const fetchBatteryData = async () => {
  const response = await fetch('https://rahimafrooz-battery-backend.vercel.app/api/v1/batteries');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const BatterySearch = ({ searchData }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['batteries'],
    queryFn: fetchBatteryData,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      const matchedBattery = data.find(battery =>
        battery.battery_name.toLowerCase() === searchData.toLowerCase()
      );

      if (matchedBattery) {
        navigate(`/product-final-page/${matchedBattery.short_code}`);
      }
    }
  }, [data, searchData, navigate]);

  if (isLoading) return <div></div>;
  if (error) return <div>Error: {error.message}</div>;

  // Ensure data is an array before filtering
  const filteredBatteries = Array.isArray(data) ? data.filter(battery =>
    battery.battery_name.toLowerCase().includes(searchData.toLowerCase()) ||
    battery.series.toLowerCase().includes(searchData.toLowerCase()) ||
    battery.item_code.toLowerCase().includes(searchData.toLowerCase()) ||
    battery.model.toLowerCase().includes(searchData.toLowerCase())
  ) : [];

  return (
    <div className=''>
      {filteredBatteries.map(battery => (
        <div key={battery.id}>
          <h2 className='hidden'>{battery.battery_name}</h2>
        </div>
      ))}
    </div>
  );
};

export default BatterySearch;
