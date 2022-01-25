import React, { useState, useCallback, useEffect, useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import config from '../../config/config';
import Spinner from '../ui/spinner.style';



function Map(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: config.googleMapsApiKey
  });
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(
      config.mapStartingBound.northEastCorner,
      config.mapStartingBound.southWestCorner
    );
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);




  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={config.mapContainerStyle}
      center={config.mapCenter}
      zoom={config.mapZoomLevel}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {props.children}
    </GoogleMap>
  ) : <><Spinner /></>;
}

export default React.memo(Map);