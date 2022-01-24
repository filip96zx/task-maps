import React, { useContext } from 'react';
import DataDisplayContext from '../../globalState/dataDisplayContext';
import MenuItemStyled from './menuItem.style';

export default function PointsOfInterestMenuItem(props) {
  const {categories, showPoiCategory} = useContext(DataDisplayContext);

  const handleShowCategory = () => {
    showPoiCategory();
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
      <h3 onClick={handleShowCategory} className={categories.poi ? 'active' : null}>Points of interest</h3>

    </MenuItemStyled>
  );
}
