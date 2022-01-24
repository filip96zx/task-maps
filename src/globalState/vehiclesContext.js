import React, { createContext, useEffect, useState } from 'react';
import useFetchMapObj from '../helpers/api/apiFetchMapObj';


const VehiclesContext = createContext({
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

export function VehiclesContextProvider(props) {
  const [data, setData] = useState([]);
  const {data: fetchedData, fetchData, error, isLoading} = useFetchMapObj('VEHICLE');


  const [icons, setIcons] = useState('default');
  const [filters, setFilters] = useState([
    { property: 'status', value: 'all' },
    { property: 'batteryLevelPct', value: 0 },
    { property: 'type', value: 'all' },
  ]);



  useEffect(() => {
    let filterData = [...fetchedData];
    const statusFilter = filters.find(filter => filter.property === 'status');
    const batteryFilter = filters.find(filter => filter.property === 'batteryLevelPct');
    const typeFilter = filters.find(filter => filter.property === 'type');

    if (statusFilter.value !== 'all') {
      filterData = filterData.filter(vehicle => vehicle.status.toLowerCase() === statusFilter.value);
    }
    if (typeFilter.value !== 'all') {
      filterData = filterData.filter(vehicle => vehicle.type.toLowerCase() === typeFilter.value);
    }
    filterData = filterData.filter(vehicle => vehicle.batteryLevelPct >= batteryFilter.value);

    setData(filterData);

  }, [filters, fetchedData]);



  const filterStatus = (status) => {
    const statusNormalized = status.toLowerCase();

    setFilters((prevState) => (
      prevState.map(filter => filter.property === 'status' ?
        {
          property: filter.property, value: statusNormalized
        }
        :
        {
          property: filter.property, value: filter.value
        })
    ));


  };

  const filterBattery = (batteryLevelPct) => {
    const batteryPctNormalized = +batteryLevelPct;
    setFilters((prevState) => (
      prevState.map(filter => filter.property === 'batteryLevelPct' ?
        {
          property: filter.property, value: batteryPctNormalized
        }
        :
        {
          property: filter.property, value: filter.value
        })
    ));
  };
  const filterType = (type) => {
    const typeNormalized = type.toLowerCase();
    setFilters((prevState) => (
      prevState.map(filter => filter.property === 'type' ?
        {
          property: filter.property, value: typeNormalized
        }
        :
        {
          property: filter.property, value: filter.value
        })
    ));
  };

  const setIconsBy = (iconsBy) => {
    const iconsByNormalized = iconsBy.toLowerCase();
    if ('battery' === iconsByNormalized) {
      setIcons('battery');
    } else if ('status' === iconsByNormalized) {
      setIcons('status');
    } else {
      setIcons('default');
    }
  };

  const context = {
    data: data,
    icons: icons,
    fetchData: fetchData,
    filterStatus: filterStatus,
    filterBattery: filterBattery,
    filterType: filterType,
    setIconsBy: setIconsBy,
    isLoading: isLoading,
    error: error
  };

  return (
    <VehiclesContext.Provider value={context}>
      {props.children}
    </VehiclesContext.Provider>
  );
}

export default VehiclesContext;
