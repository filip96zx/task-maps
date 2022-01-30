import React, { useContext, useEffect, useState } from 'react';
import config from '../../config/config';
import { DataDisplayContext, VehiclesContext } from '../../globalState';
import ItemsCount from './itemsCount';
import MenuItemStyled from './menuItem.style';

export default function VehiclesMenuItem({ showMenu }) {
  const { data, fetchData, filterStatus, filterBattery, filterType, setIconsBy } = useContext(VehiclesContext);
  const { categories, showVehiclesCategory } = useContext(DataDisplayContext);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (!categories.vehicles) setShowDropdown(false);
  }, [categories.vehicles]);

  useEffect(() => {
    if (!showMenu) setShowDropdown(false);
  }, [showMenu]);

  const iconsChangeHandler = (event) => {
    setIconsBy(event.target.value);
  };

  const filterByStatusHandler = (event) => {
    filterStatus(event.target.value);
  };

  const filterByBatteryHandler = (event) => {
    filterBattery(+event.target.value);
  };

  const filterByTypeHandler = (event) => {
    filterType(event.target.value);
  };

  const handleShowCategory = () => {
    showVehiclesCategory();
    if (!categories.vehicles && !config.vehicleDummyData) {
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
      <h3 onClick={handleShowCategory} className={categories.vehicles ? 'active ' : null}>Vehicles</h3>
      <ul className={showDropdown ? 'show' : null}>
        <ItemsCount count={data.length} />
        <li>
          <label htmlFor="icons">icons by</label>
          <select name="icons" id="icons" onChange={iconsChangeHandler}>
            <option value="default">default</option>
            <option value="battery">battery</option>
            <option value="status">status</option>
          </select>
        </li>
        <li>
          <label htmlFor="status">status</label>
          <select name="status" id="status" onChange={filterByStatusHandler} >
            <option value="all">all</option>
            <option value="available">available</option>
            <option value="inaccessible">inaccessible</option>
          </select>
        </li>
        <li>
          <label htmlFor="type">type</label>
          <select name="type" id="type" onChange={filterByTypeHandler}>
            <option value="all">all</option>
            <option value="truck">truck</option>
            <option value="car">car</option>
          </select>
        </li>
        <li>
          <label htmlFor="battery">battery %</label>
          <select name="battery" id="battery" onChange={filterByBatteryHandler}>
            <option value="0">all</option>
            <option value="100">100</option>
            <option value="90">{'>'}90</option>
            <option value="80">{'>'}80</option>
            <option value="70">{'>'}70</option>
            <option value="60">{'>'}60</option>
            <option value="50">{'>'}50</option>
            <option value="40">{'>'}40</option>
            <option value="30">{'>'}30</option>
            <option value="20">{'>'}20</option>
            <option value="10">{'>'}10</option>
          </select>
        </li>
      </ul>
    </MenuItemStyled>
  );
}
