import React, { useContext } from 'react';
import VehiclesContext from '../../globalState/vehiclesContext';
import Map from './map';
import MarkerCluster from './markerCluster';



function MapWindow() {
  const vehiclesContext = useContext(VehiclesContext);


  return (
    <main>
      <Map>
        {vehiclesContext.data && <MarkerCluster items={vehiclesContext.data} />}
      </Map>
    </main>
  );
}

export default MapWindow;