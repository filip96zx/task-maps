import React, { useContext } from 'react';
import DataDisplayContext from '../../../globalState/dataDisplayContext';
import PopupStyled from './popup.style';

export default function ParkingPopup(props) {
  const { setDetailsPopup } = useContext(DataDisplayContext);
  const { name } = props.data;
  const { street, house, city } = props.data.address;

  const streetAdr = street ? street : '';
  const houseAdr = house ? house : '';
  const cityAdr = city ? city : '';


  const openMenuDetailsPopup = () => {
    setDetailsPopup(props.data);
  };

  return (
    <PopupStyled>
      <h3>{name}</h3>
      {street &&
        <div className='data-row'>
          <h4>adress:</h4><span>{streetAdr + ' ' + houseAdr}</span>
        </div>
      }
      {city &&
        <div className='data-row'>
          <h4>city:</h4><span>{cityAdr}</span>
        </div>
      }
      <button onClick={openMenuDetailsPopup}>more...</button>
    </PopupStyled>
  );
}
