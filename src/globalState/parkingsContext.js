import React, { createContext, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import { apiURL } from '../config/config';
import useFetchMapObj from '../helpers/apiFetchMapObj';

const ParkingsContext = createContext({
  data: [],
  icons: 'default',
  fetchData: () => { },
  filterFreeSpaces: () => { },
  filterChargers: () => { },
  setIconsBy: () => { },
  isLoading: true,
  error: null
});

export default function ParkingsContextProvider(props) {
  const [data, setData] = useState([]);
  const { data: fetchedData, fetchData, error, isLoading } = useFetchMapObj('PARKING');

  const [icons, setIcons] = useState('default');

  const [filters, setFilters] = useState([
    { property: 'availableSpacesCount', value: 'all' },
    { property: 'chargers', value: 'all' }
  ]);

  useEffect(() => {
    let filteredData = [...fetchedData];
    const spacesFilter = filters.find(filter => filter.property === 'availableSpacesCount');
    const chargersFilter = filters.find(filter => filter.property === 'chargers');

    if (spacesFilter.value === 'free') {
      filteredData = filteredData.filter(parking => parking.availableSpacesCount > 0);
    }
    if (spacesFilter.value === 'full') {
      filteredData = filteredData.filter(parking => parking.availableSpacesCount === 0);
    }
    if (chargersFilter.value === 'with') {
      filteredData = filteredData.filter(parking => parking.chargers?.length > 0);
    }
    if (chargersFilter.value === 'without') {
      filteredData = filteredData.filter(parking => parking.chargers?.length === 0);
    }

    setData(filteredData);

  }, [filters, fetchedData]);


  const filterFreeSpaces = (setFreeAllFull) => {
    const filterNormalized = setFreeAllFull.toLowerCase();
    setFilters((prevState) => prevState.map(filter => filter.property === 'availableSpacesCount' ?
      {
        property: filter.property,
        value: filterNormalized
      }
      :
      {
        property: filter.property,
        value: filter.value
      }));
  };

  const filterChargers = (setAllWithWithout) => {
    const filterNormalized = setAllWithWithout.toLowerCase();
    setFilters((prevState) => prevState.map(filter => filter.property === 'chargers' ?
      {
        property: filter.property,
        value: filterNormalized
      }
      :
      {
        property: filter.property,
        value: filter.value
      }));
  };

  const setIconsBy = (iconsBy) => {
   const normalizedIconsBy = iconsBy.toLowerCase();

  };





  const context = {
    data: data,
    icons: icons,
    fetchData: fetchData,
    filterFreeSpaces: filterFreeSpaces,
    filterChargers: filterChargers,
    setIconsBy: setIconsBy,
    isLoading: isLoading,
    error: error

  };

  return (
    <ParkingsContext.Provider value={context}>
      {props.children}
    </ParkingsContext.Provider>
  );
}
