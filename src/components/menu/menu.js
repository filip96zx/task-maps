import React, { useContext } from 'react';
import VehiclesMenu from './vehiclesMenu';
import ParkingsMenu from './parkingsMenu.';
import PointsOfInterestMenu from './pointsOfInterestMenu';
import DetailsMenuPopup from './detailsMenuPopup';
import DataDisplayContext from '../../globalState/dataDisplayContext';
import MenuStyled from './menu.style';

export default function Menu() {
  const { menuDetailsPopup } = useContext(DataDisplayContext);

  return (
    <MenuStyled>
      <h2>menu</h2>
      <menu>
        <VehiclesMenu />
        <ParkingsMenu />
        <PointsOfInterestMenu />
      </menu>
      {menuDetailsPopup && <DetailsMenuPopup data={menuDetailsPopup} />}
    </MenuStyled>
  );
}
