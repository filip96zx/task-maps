import React from 'react';
import VehiclesMenu from './vehiclesMenu';
import ParkingsMenu from './parkingsMenu.';
import PointsOfInterestMenu from './pointsOfInterestMenu';

import MenuStyled from './menu.style';

export default function Menu() {


  return (
    <MenuStyled>
      <h2>menu</h2>
      <menu>
        <VehiclesMenu />
        <ParkingsMenu />
        <PointsOfInterestMenu />
      </menu>

    </MenuStyled>
  );
}
