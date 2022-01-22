import React from 'react';
import { MarkerClusterer } from '@react-google-maps/api';
import Marker from './marker';


function MarkerCluster(props) {

  return (
    <MarkerClusterer>
      {(clusterer) => props.items.map(marker => <Marker key={marker.id} data={marker} clusterer={clusterer} />)}
    </MarkerClusterer>
  );

}

export default MarkerCluster;