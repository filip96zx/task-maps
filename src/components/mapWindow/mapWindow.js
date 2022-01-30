import React, { useContext } from 'react';
import Map from './map';
import MarkerCluster from './markerCluster';
import DetailsPopup from './detailsPopup';
import { VehiclesContext, ParkingsContext, PoiContext, DataDisplayContext } from '../../globalState';




function MapWindow() {
  const { categories, menuDetailsPopup } = useContext(DataDisplayContext);
  const vehiclesContext = useContext(VehiclesContext);
  const parkingsContext = useContext(ParkingsContext);
  const poiContext = useContext(PoiContext);

  return (
    <main>
      <Map>
        {(categories.vehicles && vehiclesContext.data) && <MarkerCluster items={vehiclesContext.data} />}
        {(categories.parkings && parkingsContext.data) && <MarkerCluster items={parkingsContext.data} />}
        {(categories.poi && poiContext.data) && <MarkerCluster items={poiContext.data} />}
      </Map>
      {menuDetailsPopup && <DetailsPopup data={menuDetailsPopup} />}
    </main>
  );
}

export default MapWindow;