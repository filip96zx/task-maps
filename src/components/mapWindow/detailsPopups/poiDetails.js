import React, { useContext } from 'react';
import DataDisplayContext from '../../../globalState/dataDisplayContext';
import Button from '../../ui/button';
import DetailsPopupStyled from './detailsPopup.style';

export default function PoiDetails({ data }) {
  const { closeDetailsPopup } = useContext(DataDisplayContext);
  const { name, description, category } = data;
  const { street, house, city } = data.address;

  const streetAdr = street ? street : '';
  const houseAdr = house ? house : '';

  return (
    <DetailsPopupStyled>
      <Button className="close-btn" onClick={closeDetailsPopup}>&times;</Button>
      <h2>{name}</h2>
      {(description !== null && description !== name) &&
        <div className='data-row'>
          <h3>decription:</h3><span>{description}</span>
        </div>
      }
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
      {category !== null &&
        <div className='data-row'>
          <h3>category:</h3><span>{category}</span>
        </div>
      }
    </DetailsPopupStyled>
  );
}
