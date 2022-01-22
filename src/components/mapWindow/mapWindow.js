import React from 'react';
import useGetVehicles from '../../api/getVehicles';
import Map from './map';
import MarkerCluster from './markerCluster';

function MapWindow() {
  const { vehicles } = useGetVehicles();

  return (
    <main>
      <Map >
        {vehicles && <MarkerCluster items={vehicles} />}
      </Map>
    </main>
  );
}

export default MapWindow;