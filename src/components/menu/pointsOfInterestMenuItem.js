import React, { useContext, useEffect, useState } from 'react';
import DataDisplayContext from '../../globalState/dataDisplayContext';
import ItemsCount from './itemsCount';
import MenuItemStyled from './menuItem.style';
import PoiContext from '../../globalState/poiContext';
import config from '../../config/config';

export default function PointsOfInterestMenuItem({ showMenu }) {
  const { data, fetchData } = useContext(PoiContext);
  const { categories, showPoiCategory } = useContext(DataDisplayContext);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (!categories.poi) setShowDropdown(false);
  }, [categories.poi]);

  useEffect(() => {
    if (!showMenu) setShowDropdown(false);
  }, [showMenu]);

  const handleShowCategory = () => {
    showPoiCategory();
    if (!categories.poi && !config.poiDummyData) {
      fetchData();
    }
    if (showDropdown) {
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  };
  return (
    <MenuItemStyled>
      <h3 onClick={handleShowCategory} className={categories.poi ? 'active' : null}>Points of interest</h3>
      <ul className={showDropdown ? 'show' : null}>
        <ItemsCount count={data.length} />
      </ul>
    </MenuItemStyled>
  );
}
