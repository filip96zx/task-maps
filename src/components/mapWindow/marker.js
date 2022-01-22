import { Marker as GoogleMarker } from "@react-google-maps/api";
import { useRef, useState, useContext } from 'react';
import { setVehicleStatusIcon, setVehicleBatteryIcon, setVehicleDefaultIcon } from '../../helpers/vehicleMarkers';
import InfoWindow from "./infoWindow";
import VehiclesContext from "../../globalState/vehiclesContext";


function Marker(props) {
  const { clusterer, data } = props;
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const markerRef = useRef();
  const { icons: vehiclesIcons } = useContext(VehiclesContext);

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
    let iconUrl;

    if ('battery' === vehiclesIcons) {
      iconUrl = setVehicleBatteryIcon(data.batteryLevelPct);
    } else if ('status' === vehiclesIcons) {
      iconUrl = setVehicleStatusIcon(data.status);
    } else {
      iconUrl = setVehicleDefaultIcon();
    }

    const icon = {
      url: iconUrl,
      scaledSize: new window.google.maps.Size(40, 40)
    };
    return (
      <GoogleMarker ref={markerRef} onClick={openInfoWindowHandler} position={convertLocation(data.location)} clusterer={clusterer} icon={icon}>
        {showInfoWindow && <InfoWindow onCloseClick={closeInfoWindowHandler} anchor={markerRef.current} data={data} />}
      </GoogleMarker>
    );
  }
}

export default Marker;