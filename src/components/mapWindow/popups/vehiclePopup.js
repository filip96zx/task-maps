import React, { useContext } from 'react';
import DataDisplayContext from '../../../globalState/dataDisplayContext';
import PopupStyled from './popup.style';

export default function VehiclePopup({ data }) {
  const { setDetailsPopup } = useContext(DataDisplayContext);
  const { name, rangeKm, type } = data;
  const typeNormalized = type?.toLowerCase();

  const openMenuDetailsPopup = () => {
    setDetailsPopup(data);
  };

  return (
    <PopupStyled>
      <h3 data-testid='header'>{name}</h3>
      {type &&
        <div className='data-row'>
          <h4>type:</h4><span data-testid='type'>{typeNormalized}</span>
        </div>
      }
      {rangeKm &&
        <div className='data-row'>
          <h4>range (km):</h4><span data-testid='range'>{rangeKm}km</span>
        </div>
      }
      <button onClick={openMenuDetailsPopup}>more...</button>
    </PopupStyled>
  );
}
