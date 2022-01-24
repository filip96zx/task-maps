import React from 'react';
import VehicleMenuDetails from './detailsPopups/vehicleDetails';
import ParkingMenuDetails from './detailsPopups/parkingDetails';

export default function DetailsPopup(props) {
  const discriminatorNormalized = props.data.discriminator.toLowerCase();

  return (
    <>
      {discriminatorNormalized === 'vehicle' && <VehicleMenuDetails data={props.data} />}
      {discriminatorNormalized === 'parking' && <ParkingMenuDetails data={props.data} />}
    </>
  );
}