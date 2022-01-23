import React, { useContext } from 'react';
import DataDisplayContext from '../../../globalState/dataDisplayContext';
import MenuPopupStyled from './detailsPopup.style';

export default function VehicleDetails(props) {
  const { closeDetailsPopup } = useContext(DataDisplayContext);

  const { name, platesNumber, rangeKm, batteryLevelPct, type, status, color } = props.data;
  const typeNormalized = type.toLowerCase();
  const statusNormalized = status.toLowerCase();
  const colorNormalized = color.toLowerCase();

  return (
    <MenuPopupStyled>
      <h2>{name}</h2>
      <div className='data-row'>
        <h3>type:</h3><span>{typeNormalized}</span>
      </div>
      <div className='data-row'>
        <h3>color:</h3><span>{colorNormalized}</span>
      </div>
      <div className='data-row'>
        <h3>plates number:</h3><span>{platesNumber}</span>
      </div>
      <div className='data-row'>
        <h3>range km:</h3><span>{rangeKm}km</span>
      </div>
      <div className='data-row'>
        <h3>battery:</h3><span>{batteryLevelPct}%</span>
      </div>
      <div className='data-row--important'>
        <h3>status:</h3><span>{statusNormalized}</span>
      </div>

      <button onClick={closeDetailsPopup}>close</button>
    </MenuPopupStyled>
  );
}
