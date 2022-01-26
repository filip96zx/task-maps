import React from 'react';
import { MarkerClusterer } from '@react-google-maps/api';
import Marker from './marker';


function MarkerCluster({items}) {

  return (
    <MarkerClusterer>
      {(clusterer) => items.map(marker => <Marker key={marker.id} data={marker} clusterer={clusterer} />)}
    </MarkerClusterer>
  );

}

export default MarkerCluster;