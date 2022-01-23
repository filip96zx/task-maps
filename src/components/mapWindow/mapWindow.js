import React, { useContext } from 'react';
import VehiclesContext from '../../globalState/vehiclesContext';
import DataDisplayContext from '../../globalState/dataDisplayContext';
import Map from './map';
import MarkerCluster from './markerCluster';

import DetailsPopup from './detailsPopup';



function MapWindow() {
  const dataDisplay = useContext(DataDisplayContext);
  const vehiclesContext = useContext(VehiclesContext);
  const categories = dataDisplay.categories;
  const { menuDetailsPopup } = dataDisplay;

  return (
    <main>
      <Map>
        {(categories.vehicles && vehiclesContext.data) && <MarkerCluster items={vehiclesContext.data} />}
      </Map>
      {menuDetailsPopup && <DetailsPopup data={menuDetailsPopup} />}
    </main>
  );
}

export default MapWindow;