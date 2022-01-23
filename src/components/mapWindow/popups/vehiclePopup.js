import React, { useContext } from 'react';
import DataDisplayContext from '../../../globalState/dataDisplayContext';

export default function VehiclePopup(props) {
  const { setDetailsPopup } = useContext(DataDisplayContext);
  const { name, rangeKm, type } = props.data;

  const openMenuDetailsPopup = () => {
    setDetailsPopup(props.data);
  };

  return (
    <div>
      <h3>{name}</h3>
      <div>
        <h4>Type</h4><span>{type.toLowerCase()}</span>

        <h4>Range (km)</h4><span>{rangeKm}km</span>
      </div>
      <button onClick={openMenuDetailsPopup}>more...</button>
    </div>
  );
}
