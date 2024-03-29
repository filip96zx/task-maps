import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import config from '../../config/config';
import Spinner from '../ui/spinner.style';



function Map(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });
  const [, setMap] = useState(null);

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
  ) : <div className="spinner-container"><Spinner size={50} /></div>;
}

export default React.memo(Map);