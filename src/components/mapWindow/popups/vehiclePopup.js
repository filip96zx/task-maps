import React from 'react';

export default function VehiclePopup(props) {
  const { name, platesNumber, rangeKm, batteryLevelPct, type } = props.data;
  return (
    <div>
      <h3>{name}</h3>
      <div>
        <h4>Type</h4><span>{type.toLowerCase()}</span>
        <h4>Battery %</h4><span>{batteryLevelPct}%</span>
        <h4>Range (km)</h4><span>{rangeKm}km</span>
        <h4>Plate Number</h4><span>{platesNumber}</span>
      </div>
    </div>
  );
}
