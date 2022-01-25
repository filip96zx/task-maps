import React from 'react';
import { InfoWindow as GoogleInfoWindow } from '@react-google-maps/api';
import VehiclePopup from './popups/vehiclePopup';
import ParkingPopup from './popups/parkingPopup';
import PoiPopup from './popups/poiPopup';

export default function InfoWindow(props) {
  const { onCloseClick, anchor, data, type } = props;

  let popup;

  if (type === 'vehicle') {
    popup = <VehiclePopup data={data} />;
  } else if (type === 'parking') {
    popup = <ParkingPopup data={data} />;
  } else if (type === 'poi') {
    popup = <PoiPopup data={data} />;
  } else {
    popup = <span style={{ color: 'black' }}>Can not load data.</span>;
  }


  return (
    <GoogleInfoWindow onCloseClick={onCloseClick} anchor={anchor}>
      {popup}
    </GoogleInfoWindow>
  );

}
