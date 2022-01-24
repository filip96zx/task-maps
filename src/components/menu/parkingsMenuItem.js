import React, { useContext } from 'react';
import DataDisplayContext from '../../globalState/dataDisplayContext';
import MenuItemStyled from './menuItem.style';

export default function ParkingsMenuItem(s) {
  //const { parkings, fetchData, filterStatus, filterBattery, filterType, setIconsBy } = useContext(ParkingsContext);
  const {categories, showParkingsCategory} = useContext(DataDisplayContext);



  const handleShowCategory = () => {
    showParkingsCategory();
    // if (!vehicles && !useVehicleDummyData) {
    //   fetchData();
    // }
    // if (showDropdown) {
    //   setShowDropdown(false);
    // } else {
    //   setShowDropdown(true);
    // }
  };

  return (
    <MenuItemStyled>
      <h3 onClick={handleShowCategory} className={categories.parkings ? 'active' : null}>Parkings</h3>
      
    </MenuItemStyled>
  );
}
