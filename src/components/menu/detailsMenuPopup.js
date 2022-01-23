import React from 'react';
import VehicleMenuDetails from './popups/vehicleMenuDetails';

export default function DetailsMenuPopup(props) {
  const discriminatorNormalized = props.data.discriminator.toLowerCase();

  return (
    <>
      {discriminatorNormalized === 'vehicle' && <VehicleMenuDetails data={props.data} />}
    </>
  );
}