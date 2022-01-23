import React from 'react';
import VehicleMenuDetails from './detailsPopups/vehicleDetails';

export default function DetailsPopup(props) {
  const discriminatorNormalized = props.data.discriminator.toLowerCase();

  return (
    <>
      {discriminatorNormalized === 'vehicle' && <VehicleMenuDetails data={props.data} />}
    </>
  );
}