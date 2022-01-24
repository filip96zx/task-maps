import { Marker as GoogleMarker } from "@react-google-maps/api";
import { useRef, useState, useContext } from 'react';
import { setVehicleStatusIcon, setVehicleBatteryIcon} from '../../helpers/markers/vehicleMarkers';
import setDefaultMarkerColor from '../../helpers/markers/defaultMarkers';
import InfoWindow from "./infoWindow";
import VehiclesContext from "../../globalState/vehiclesContext";


function Marker(props) {
  const { clusterer, data } = props;
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const markerRef = useRef();
  const discriminatorNormalized = data.discriminator.toLowerCase();
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


  let icon;
  if (discriminatorNormalized === 'vehicle') {
    if ('battery' === vehiclesIcons) {
      icon = setVehicleBatteryIcon(data.batteryLevelPct);
    } else if ('status' === vehiclesIcons) {
      icon = setVehicleStatusIcon(data.status);
    } else {
      icon = setDefaultMarkerColor();
    }
  } if (discriminatorNormalized === 'parking') {
    
  }

  return (
    <GoogleMarker ref={markerRef} onClick={openInfoWindowHandler} position={convertLocation(data.location)} clusterer={clusterer} icon={icon}>
      {showInfoWindow && <InfoWindow onCloseClick={closeInfoWindowHandler} type={discriminatorNormalized} anchor={markerRef.current} data={data} />}
    </GoogleMarker>
  );
}

export default Marker;