import { Marker as GoogleMarker } from "@react-google-maps/api";
import { useRef, useState, useContext } from 'react';
import { setVehicleStatusIcon, setVehicleBatteryIcon } from '../../helpers/markers/vehicleMarkers';
import { setParkingHasFreeSpaceIcon, setParkingsHasChargersIcon } from '../../helpers/markers/parkingMarkers';
import setDefaultMarkerColor from '../../helpers/markers/defaultMarkers';
import InfoWindow from "./infoWindow";
import VehiclesContext from "../../globalState/vehiclesContext";
import ParkingsContext from "../../globalState/parkingsContext";


function Marker({ clusterer, data }) {
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const markerRef = useRef();
  const discriminatorNormalized = data.discriminator.toLowerCase();
  const { icons: vehiclesIcons } = useContext(VehiclesContext);
  const { icons: parkingsIcons } = useContext(ParkingsContext);

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
    }
  } if (discriminatorNormalized === 'parking') {
    if ('spaces' === parkingsIcons) {
      icon = setParkingHasFreeSpaceIcon(data.availableSpacesCount > 0);
    } else if ('chargers' === parkingsIcons) {
      icon = setParkingsHasChargersIcon(data.chargers?.length > 0);
    }
  }

  if (!icon) icon = setDefaultMarkerColor();

  return (
    <GoogleMarker ref={markerRef} onClick={openInfoWindowHandler} position={convertLocation(data.location)} clusterer={clusterer} icon={icon}>
      {showInfoWindow && <InfoWindow onCloseClick={closeInfoWindowHandler} type={discriminatorNormalized} anchor={markerRef.current} data={data} />}
    </GoogleMarker>
  );
}

export default Marker;