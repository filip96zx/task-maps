import { useState, useEffect } from 'react';
import config from '../../config/config';
import { getXDummyVehicles } from '../../dummy-data/vehicle';

const useFetchMapObj = (objName) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    if (config.vehicleDummyData && objName ==='VEHICLE') {
      const dummyVehicles = getXDummyVehicles(100);
      setData(dummyVehicles);
      setIsLoading(false);
      return;
    }
    if (objName) {
      try {
        const responseData = await fetch(config.apiURL + 'map?objectType=' + objName).then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw Error('Error !');
          }
        });
        const data = responseData.objects.map(item => item);
        setData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    data: data,
    isLoading: isLoading,
    fetchData: fetchData,
    error: error
  };
};

export default useFetchMapObj;