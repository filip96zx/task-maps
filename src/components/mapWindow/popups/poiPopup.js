import React, { useContext } from 'react';
import { DataDisplayContext } from '../../../globalState';
import PopupStyled from './popup.style';

export default function PoiPopup({ data }) {
  const { setDetailsPopup } = useContext(DataDisplayContext);
  const { name } = data;
  const { street, house, city } = data.address;

  const streetAdr = street || '';
  const houseAdr = house || '';



  const openMenuDetailsPopup = () => {
    setDetailsPopup(data);
  };

  return (
    <PopupStyled>
      <h3>{name}</h3>
      {street &&
        <div className='data-row'>
          <h4>adress:</h4><span>{`${streetAdr} ${houseAdr}`}</span>
        </div>
      }
      {city &&
        <div className='data-row'>
          <h4>city:</h4><span>{city}</span>
        </div>
      }
      <button onClick={openMenuDetailsPopup}>more...</button>
    </PopupStyled>
  );
}
