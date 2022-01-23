import React from 'react';
import { InfoWindow as GoogleInfoWindow } from '@react-google-maps/api';
import VehiclePopup from './popups/vehiclePopup';

export default function InfoWindow(props) {
  const { onCloseClick, anchor, data, type } = props;

  if (type === 'vehicle') {
    return (
      <GoogleInfoWindow onCloseClick={onCloseClick} anchor={anchor}>
        <VehiclePopup data={data}/>
      </GoogleInfoWindow>
    );
  }
}
