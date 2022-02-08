import React, { useContext } from 'react';
import DataDisplayContext from '../../../globalState/dataDisplayContext';
import Button from '../../ui/button';
import DetailsPopupStyled from './detailsPopup.style';

export default function VehicleDetails({ data }) {
  const { closeDetailsPopup } = useContext(DataDisplayContext);

  const { name, platesNumber, rangeKm, batteryLevelPct, type, status, color } = data;
  const typeNormalized = type?.toLowerCase();
  const statusNormalized = status?.toLowerCase();
  const colorNormalized = color?.toLowerCase();

  return (
    <DetailsPopupStyled>
      <Button className="close-btn" onClick={closeDetailsPopup}>&times;</Button>
      <h2 data-testid='header-details'>{name}</h2>
      {type !== null &&
        <div className='data-row'>
          <h3>type:</h3><span data-testid='type'>{typeNormalized}</span>
        </div>
      }
      {color !== null &&
        <div className='data-row'>
          <h3>color:</h3><span data-testid='color'>{colorNormalized}</span>
        </div>
      }
      {platesNumber !== null &&
        <div className='data-row'>
          <h3>plates number:</h3><span data-testid='platesNumber'>{platesNumber}</span>
        </div>
      }
      {rangeKm !== null &&
        <div className='data-row'>
          <h3>range km:</h3><span data-testid='range'>{rangeKm}km</span>
        </div>
      }
      {batteryLevelPct !== null &&
        <div className='data-row'>
          <h3>battery:</h3><span data-testid='batteryLevelPct'>{batteryLevelPct}%</span>
        </div>
      }

      <div className='data-row--important'>
        <h3>status:</h3><span data-testid='status'>{statusNormalized}</span>
      </div>

    </DetailsPopupStyled>
  );
}
