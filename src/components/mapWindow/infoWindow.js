import React from 'react';
import { InfoWindow as GoogleInfoWindow } from '@react-google-maps/api';
import VehiclePopup from './popups/vehiclePopup';
import ParkingPopup from './popups/parkingPopup';

export default function InfoWindow(props) {
  const { onCloseClick, anchor, data, type } = props;

  let popup;

  if (type === 'vehicle') {
    popup = <VehiclePopup data={data} />;
  } else if(type === 'parking') {
    popup = <ParkingPopup data={data} />;
  } else {
    popup = <span>discriminatory type not handled</span>
  }


    return (
      <GoogleInfoWindow onCloseClick={onCloseClick} anchor={anchor}>
        {popup}
      </GoogleInfoWindow>
    );
  
}
