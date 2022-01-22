import React from 'react';
import { InfoWindow as GoogleInfoWindow } from '@react-google-maps/api';

export default function InfoWindow(props) {
  const { onCloseClick, anchor, data } = props;

  if (data.discriminator.toLowerCase() === 'vehicle') {
    const { name, platesNumber, rangeKm, batteryLevelPct, type } = data;
    return (
      <GoogleInfoWindow onCloseClick={onCloseClick} anchor={anchor}>
        <div>
          <h3>{name}</h3>
          <div>
            <h4>Type</h4><span>{type.toLowerCase()}</span>
            <h4>Battery %</h4><span>{batteryLevelPct}%</span>
            <h4>Range (km)</h4><span>{rangeKm}km</span>
            <h4>Plate Number</h4><span>{platesNumber}</span>
          </div>
        </div>
      </GoogleInfoWindow>
    );
  }
}
