import React, { useContext } from 'react';
import VehiclesContext from '../../globalState/vehiclesContext';
import DataDisplayContext from '../../globalState/dataDisplayContext';
import Map from './map';
import MarkerCluster from './markerCluster';



function MapWindow() {
  const dataDisplay = useContext(DataDisplayContext);
  const vehiclesContext = useContext(VehiclesContext);
  const categories = dataDisplay.categories;


  return (
    <main>
      <Map>
        {(categories.vehicles && vehiclesContext.data) && <MarkerCluster items={vehiclesContext.data} />}
      </Map>
    </main>
  );
}

export default MapWindow;