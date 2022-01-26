import React, { useContext } from 'react';
import DataDisplayContext from '../../../globalState/dataDisplayContext';
import Button from '../../ui/button';
import DetailsPopupStyled from './detailsPopup.style';

export default function ParkingsDetails({ data }) {
  const { closeDetailsPopup } = useContext(DataDisplayContext);
  const { name, spacesCount, availableSpacesCount, chargers } = data;
  const { street, house, city } = data.address;

  const streetAdr = street || '';
  const houseAdr = house || '';



  return (
    <DetailsPopupStyled>
      <Button className="close-btn" onClick={closeDetailsPopup}>&times;</Button>
      <h2>{name}</h2>
      {street !== null &&
        <div className='data-row'>
          <h3>adress:</h3><span>{streetAdr + ' ' + houseAdr}</span>
        </div>
      }
      {city !== null &&
        <div className='data-row'>
          <h3>city:</h3><span>{city}</span>
        </div>
      }
      {spacesCount !== null &&
        <div className='data-row'>
          <h3>spaces count:</h3><span>{spacesCount}</span>
        </div>
      }
      {availableSpacesCount !== null &&
        (<div className='data-row'>
          <h3>available spaces:</h3><span>{availableSpacesCount}</span>
        </div>)
      }
      <div className='data-row'>
        <h3>chargers:</h3><span>{chargers?.length === 0 ? 'no' : chargers?.length}</span>
      </div>
    </DetailsPopupStyled>
  );
}
