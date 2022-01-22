import { useState, useEffect } from 'react';

const useGetVehicles = () => {
  const [vehicles, setVehicles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVehicles();
  }, []);

  const getVehicles = async () => {
    try {
      const data = await fetch('https://dev.vozilla.pl/api-client-portal/map?objectType=VEHICLE').then(response=>{
        if(response.ok){
          return response.json()
        }else{
          throw Error('Error!')
        }
      });

      const vehiclesList = data.objects.map(item => item);
      setVehicles(vehiclesList);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    vehicles: vehicles,
    isLoading: isLoading,
    getVehicles: getVehicles,
    error: error
  };

};

export default useGetVehicles;