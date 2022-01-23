import React from 'react';
import VehiclesMenuItem from './vehiclesMenuItem';
import ParkingsMenuItem from './parkingsMenuItem';
import PointsOfInterestMenuItem from './pointsOfInterestMenuItem';

import MenuStyled from './menu.style';

export default function Menu() {


  return (
    <MenuStyled>
      <menu>
        <VehiclesMenuItem />
        <ParkingsMenuItem />
        <PointsOfInterestMenuItem />
      </menu>
    </MenuStyled>
  );
}
