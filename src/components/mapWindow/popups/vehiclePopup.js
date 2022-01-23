import React, { useContext } from 'react';
import DataDisplayContext from '../../../globalState/dataDisplayContext';
import PopupStyled from './popup.style';

export default function VehiclePopup(props) {
  const { setDetailsPopup } = useContext(DataDisplayContext);
  const { name, rangeKm, type } = props.data;
  const typeNormalized =type.toLowerCase()

  const openMenuDetailsPopup = () => {
    setDetailsPopup(props.data);
  };

  return (
    <PopupStyled>
      <h3>{name}</h3>
      <div className='data-row'>
        <h4>type:</h4><span>{typeNormalized }</span>
      </div>
      <div className='data-row'>
        <h4>range (km):</h4><span>{rangeKm}km</span>
      </div>

      <button onClick={openMenuDetailsPopup}>more...</button>
    </PopupStyled>
  );
}
