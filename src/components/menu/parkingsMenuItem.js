import React, { useContext, useEffect, useState } from 'react';
import { DataDisplayContext, ParkingsContext } from '../../globalState';
import MenuItemStyled from './menuItem.style';
import config from '../../config/config';
import ItemsCount from './itemsCount';

export default function ParkingsMenuItem({ showMenu }) {
  const { data, fetchData, filterFreeSpaces, filterChargers, setIconsBy } = useContext(ParkingsContext);
  const { categories, showParkingsCategory } = useContext(DataDisplayContext);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (!categories.parkings) setShowDropdown(false);
  }, [categories.parkings]);

  useEffect(() => {
    if (!showMenu) setShowDropdown(false);
  }, [showMenu]);

  const handleShowCategory = () => {
    showParkingsCategory();
    if (!categories.parkings && !config.parkingDummyData) {
      fetchData();
    }
    if (showDropdown) {
      setShowDropdown(false);
    } else {
      setShowDropdown(true);
    }
  };

  const iconsChangeHandler = (event) => {
    setIconsBy(event.target.value);
  };

  const filterByChargersHandler = (event) => {
    filterChargers(event.target.value);
  };

  const filterByFreeSpacesHandler = (event) => {
    filterFreeSpaces(event.target.value);
  };

  return (
    <MenuItemStyled>
      <h3 onClick={handleShowCategory} className={categories.parkings ? 'active' : null}>Parkings</h3>
      <ul className={showDropdown ? 'show' : null}>
        <ItemsCount count={data.length} />
        <li>
          <label htmlFor="icons">icons by</label>
          <select name="icons" id="icons" onChange={iconsChangeHandler}>
            <option value="default">default</option>
            <option value="chargers">chargers</option>
            <option value="spaces">free spaces</option>
          </select>
        </li>
        <li>
          <label htmlFor="chargers">chargers</label>
          <select name="status" id="status" onChange={filterByChargersHandler} >
            <option value="all">all</option>
            <option value="with">yes</option>
            <option value="without">no</option>
          </select>
        </li>
        <li>
          <label htmlFor="chargers">free spaces</label>
          <select name="status" id="status" onChange={filterByFreeSpacesHandler} >
            <option value="all">all</option>
            <option value="free">yes</option>
            <option value="full">no</option>
          </select>
        </li>
      </ul>
    </MenuItemStyled>
  );
}
