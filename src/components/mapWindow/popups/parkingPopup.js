import React, { useContext } from 'react';
import DataDisplayContext from '../../../globalState/dataDisplayContext';
import PopupStyled from './popup.style';

export default function ParkingPopup({ data }) {
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
          <h4>adress:</h4><span data-testid='address' >{`${streetAdr} ${houseAdr}`}</span>
        </div>
      }
      {city &&
        <div className='data-row'>
          <h4>city:</h4><span data-testid='city' >{city}</span>
        </div>
      }
      <button onClick={openMenuDetailsPopup}>more...</button>
    </PopupStyled>
  );
}
