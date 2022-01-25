import React, { createContext } from 'react';
import useFetchMapObj from '../helpers/api/apiFetchMapObj';


const PoiContext = createContext({
  data: [],
  fetchData: () => { },
  isLoading: true,
  error: null
});

export default PoiContext;

export function PoiContextProvider(props) {
  const { data, fetchData, error, isLoading } = useFetchMapObj('POI');

  const context = {
    data: data,
    fetchData: fetchData,
    isLoading: isLoading,
    error: error
  };
  return (
    <PoiContext.Provider value={context}>
      {props.children}
    </PoiContext.Provider>
  );
}
