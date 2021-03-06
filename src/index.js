import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { VehiclesContextProvider } from './globalState/vehiclesContext';
import { DataDisplayContextProvider } from './globalState/dataDisplayContext';
import { GlobalStyles } from './globalStyles/globalStyles';
import { ParkingsContextProvider } from './globalState/parkingsContext';
import { PoiContextProvider } from './globalState/poiContext';

ReactDOM.render(
  <React.StrictMode>
    <DataDisplayContextProvider>
      <ParkingsContextProvider>
        <VehiclesContextProvider>
          <PoiContextProvider>
            <GlobalStyles />
            <App />
          </PoiContextProvider>
        </VehiclesContextProvider>
      </ParkingsContextProvider>
    </DataDisplayContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
