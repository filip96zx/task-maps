import React, { createContext, useState } from 'react';
import useFetchMapObj from '../helpers/api/apiFetchMapObj';


const PoiContext = createContext({
  data: [],
  isLoading: true,
  error: null
});


export default function PoiContextProvider(props) {
  const { data , fetchData, error, isLoading } = useFetchMapObj('POI');

  const context = {
    data: data,
    isLoading: isLoading,
    error: error
  };
  return (
    <PoiContext.Provider value={context}>
      {props.children}
    </PoiContext.Provider>
  );
}
