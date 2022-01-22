import { Marker as GoogleMarker } from "@react-google-maps/api";
import { useRef, useState } from 'react';
import { setVehicleStatusIcon, setVehicleBatteryIcon, setVehicleDefaultIcon } from '../../helpers/vehicleMarkers';
import InfoWindow from "./infoWindow";



function Marker(props) {
  const { clusterer, data } = props;
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const markerRef = useRef();

  const convertLocation = (location) => {
    return {
      lat: location.latitude,
      lng: location.longitude
    };
  };

  const openInfoWindowHandler = () => {
    setShowInfoWindow(true);
  };

  const closeInfoWindowHandler = () => {
    setShowInfoWindow(false);
  };

  if (data.discriminator.toLowerCase() === 'vehicle') {

    return (
      <GoogleMarker ref={markerRef} onClick={openInfoWindowHandler} position={convertLocation(data.location)} clusterer={clusterer} icon={setVehicleStatusIcon(data.status)}>
        {showInfoWindow && <InfoWindow onCloseClick={closeInfoWindowHandler} anchor={markerRef.current} data={data} />}
      </GoogleMarker>

    );
  }
}

export default Marker;