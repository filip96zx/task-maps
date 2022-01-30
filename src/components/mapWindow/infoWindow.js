import React from 'react';
import { InfoWindow as GoogleInfoWindow } from '@react-google-maps/api';
import { ParkingPopup, VehiclePopup, PoiPopup } from './popups';

export default function InfoWindow({ onCloseClick, anchor, data, type }) {

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
