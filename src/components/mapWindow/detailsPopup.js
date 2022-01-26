import React from 'react';
import VehicleMenuDetails from './detailsPopups/vehicleDetails';
import ParkingMenuDetails from './detailsPopups/parkingDetails';
import PoiMenuDetails from './detailsPopups/poiDetails';

export default function DetailsPopup({ data }) {
  const discriminatorNormalized = data.discriminator.toLowerCase();

  return (
    <>
      {discriminatorNormalized === 'vehicle' && <VehicleMenuDetails data={data} />}
      {discriminatorNormalized === 'parking' && <ParkingMenuDetails data={data} />}
      {discriminatorNormalized === 'poi' && <PoiMenuDetails data={data} />}
    </>
  );
}