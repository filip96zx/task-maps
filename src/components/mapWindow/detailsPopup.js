import React from 'react';
import { ParkingsDetails, PoiDetails, VehicleDetails } from './detailsPopups';

export default function DetailsPopup({ data }) {
  const discriminatorNormalized = data.discriminator.toLowerCase();

  return (
    <>
      {discriminatorNormalized === 'vehicle' && <VehicleDetails data={data} />}
      {discriminatorNormalized === 'parking' && <ParkingsDetails data={data} />}
      {discriminatorNormalized === 'poi' && <PoiDetails data={data} />}
    </>
  );
}