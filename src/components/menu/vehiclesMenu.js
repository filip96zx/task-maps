import React, { useContext } from 'react';
import VehiclesContext from '../../globalState/vehiclesContext';
import MenuItemStyled from './menuItem.style';

export default function VehiclesMenu() {
  const { filterStatus, filterBattery, filterType, setIconsBy } = useContext(VehiclesContext);


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

  return (
    <MenuItemStyled>
      <h3>Vehicles</h3>
      <form>
        <div className='form-control'>
          <label htmlFor="icons">icons by</label>
          <select name="icons" id="icons" onChange={iconsChangeHandler}>
            <option value="default">default</option>
            <option value="battery">battery</option>
            <option value="status">status</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="status">status</label>
          <select name="status" id="status" onChange={filterByStatusHandler}>
            <option value="all">all</option>
            <option value="available">available</option>
            <option value="inaccessible">inaccessible</option>
          </select>
        </div>
          
        <div className="form-control">
          <label htmlFor="type">type</label>
          <select name="type" id="type" onChange={filterByTypeHandler}>
            <option value="all">all</option>
            <option value="truck">truck</option>
            <option value="car">car</option>
          </select>
        </div>
          
        <div className="form-control">
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
        </div>
      </form>
    </MenuItemStyled>
  );
}
