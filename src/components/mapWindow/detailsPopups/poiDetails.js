import React, { useContext } from 'react';
import DataDisplayContext from '../../../globalState/dataDisplayContext';
import Button from '../../ui/button';
import DetailsPopupStyled from './detailsPopup.style';

export default function PoiDetails(props) {
  const { closeDetailsPopup } = useContext(DataDisplayContext);
  const { name, description, category } = props.data;
  const { street, house, city } = props.data.address;

  const streetAdr = street ? street : '';
  const houseAdr = house ? house : '';
  const cityAdr = city ? city : '';

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
          <h3>city:</h3><span>{cityAdr}</span>
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
