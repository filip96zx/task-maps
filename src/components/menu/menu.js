import React, { useContext } from 'react';
import VehiclesMenuItem from './vehiclesMenuItem';
import ParkingsMenuItem from './parkingsMenuItem';
import PointsOfInterestMenuItem from './pointsOfInterestMenuItem';
import DataDisplayContext from '../../globalState/dataDisplayContext';
import MenuStyled from './menu.style';


export default function Menu() {
  const dataDisplayContext = useContext(DataDisplayContext);
  const { showParkingsCategory, showPoiCategory } = dataDisplayContext;



  const setShowParkingsHandler = () => {
    showParkingsCategory();
  };

  const setShowPoiHandler = () => {
    showPoiCategory();
  };

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
