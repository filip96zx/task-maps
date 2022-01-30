import React, { useContext, useState } from 'react';
import VehiclesMenuItem from './vehiclesMenuItem';
import ParkingsMenuItem from './parkingsMenuItem';
import PointsOfInterestMenuItem from './pointsOfInterestMenuItem';
import MenuStyled from './menu.style';
import Spinner from '../ui/spinner.style';
import { VehiclesContext, PoiContext, ParkingsContext } from '../../globalState';
import Button from '../ui/button';
import { ReactComponent as Hamburgericon } from '../../assets/hamburger.svg';


export default function Menu() {
  const { isLoading: vIsLoading } = useContext(VehiclesContext);
  const { isLoading: pIsLoading } = useContext(ParkingsContext);
  const { isLoading: poiIsLoading } = useContext(PoiContext);
  const [showMenu, setShowMenu] = useState(false);



  const toggleMenuHandler = () => {
    setShowMenu(prevState => !prevState);
  };



  const loader = (vIsLoading || pIsLoading || poiIsLoading) ? <Spinner /> : null;

  return (
    <MenuStyled>
      <div className='loader-container'>
        {loader}
      </div>
      <div className="mobile-btn-wrapper">
        <Button onClick={toggleMenuHandler}><Hamburgericon /></Button>
      </div>
      <menu className={showMenu ? 'show' : null}>
        <VehiclesMenuItem showMenu={showMenu} />
        <ParkingsMenuItem showMenu={showMenu} />
        <PointsOfInterestMenuItem showMenu={showMenu} />
      </menu>
    </MenuStyled>
  );
}
