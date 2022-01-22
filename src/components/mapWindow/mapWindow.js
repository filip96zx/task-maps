import React, { useContext } from 'react';
import VehiclesContext from '../../globalState/vehiclesContext';
import DisplayCategoriesContext from '../../globalState/categoryDisplayContext';
import Map from './map';
import MarkerCluster from './markerCluster';



function MapWindow() {
  const displayCategory = useContext(DisplayCategoriesContext)
  const vehiclesContext = useContext(VehiclesContext);
  const categories = displayCategory.categories;


  return (
    <main>
      <Map>
        {(categories.cars && vehiclesContext.data) && <MarkerCluster items={vehiclesContext.data} />}
      </Map>
    </main>
  );
}

export default MapWindow;