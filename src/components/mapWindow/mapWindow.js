import React from 'react';
import useGetVehicles from '../../api/getVehicles';

function MapWindow() {
  const { vehicles } = useGetVehicles();

  return (
    <main>
      <Map />
    </main>
  );
}

export default MapWindow;