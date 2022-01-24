import React, { createContext, useState } from 'react';
import { apiURL } from '../config/config';

const ParkingsContext = createContext({
  data: [],
  icons: 'default',
  fetchData: () => { },
  filterStatus: () => { },
  filterBattery: () => { },
  filterType: () => { },
  setIconsBy: () => { },
  isLoading: true,
  error: null
});

export default function ParkingsContextProvider(props) {
  const [data, setData] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await fetch(apiURL+'map?objectType=PARKING').then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error('Error !');
        }
      });
      const vehiclesList = data.objects.map(item => item);
      setFetchedData(vehiclesList);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };




  const context = {

  };

  return (
    <ParkingsContext.Provider value={context}>
      {props.children}
    </ParkingsContext.Provider>
  );
}
