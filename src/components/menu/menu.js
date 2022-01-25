import React, { useContext } from 'react';
import VehiclesMenuItem from './vehiclesMenuItem';
import ParkingsMenuItem from './parkingsMenuItem';
import PointsOfInterestMenuItem from './pointsOfInterestMenuItem';
import MenuStyled from './menu.style';
import Spinner from '../ui/spinner.style';
import VehiclesContext from '../../globalState/vehiclesContext';
import ParkingsContext from '../../globalState/parkingsContext';
import PoiContext from '../../globalState/poiContext';


export default function Menu() {
  const { isLoading: vIsLoading } = useContext(VehiclesContext);
  const { isLoading: pIsLoading } = useContext(ParkingsContext);
  const { isLoading: poiIsLoading } = useContext(PoiContext);



  const loader = (vIsLoading || pIsLoading || poiIsLoading) ? <Spinner /> : null;

  return (
    <MenuStyled>
      <div className='loader-container'>
        {loader}
      </div>
      <menu>
        <VehiclesMenuItem />
        <ParkingsMenuItem />
        <PointsOfInterestMenuItem />
      </menu>
    </MenuStyled>
  );
}
