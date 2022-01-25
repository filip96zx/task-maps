import { useState, useEffect } from 'react';
import config from '../../config/config';
import { getXDummyParkings } from '../../dummy-data/parking';
import { getXDummyPoi } from '../../dummy-data/poi';
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
    if (config.vehicleDummyData && objName === 'VEHICLE') {
      const dummyVehicles = getXDummyVehicles(100);
      setData(dummyVehicles);
      setIsLoading(false);
      return;
    }
    if (config.parkingDummyData && objName === 'PARKING') {
      const dummyParkings = getXDummyParkings(120);
      setData(dummyParkings);
      setIsLoading(false);
      return;
    }
    if (config.parkingDummyData && objName === 'POI') {
      const dummyPoi = getXDummyPoi(70);
      setData(dummyPoi);
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
