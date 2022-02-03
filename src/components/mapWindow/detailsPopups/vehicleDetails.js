import React, { useContext } from 'react';
import DataDisplayContext from '../../../globalState/dataDisplayContext';
import Button from '../../ui/button';
import DetailsPopupStyled from './detailsPopup.style';

export default function VehicleDetails({ data }) {
  const { closeDetailsPopup } = useContext(DataDisplayContext);

  const { name, platesNumber, rangeKm, batteryLevelPct, type, status, color } = data;
  const typeNormalized = type.toLowerCase();
  const statusNormalized = status.toLowerCase();
  const colorNormalized = color.toLowerCase();

  return (
    <DetailsPopupStyled>
      <Button className="close-btn" onClick={closeDetailsPopup}>&times;</Button>
      <h2 data-testid='vehicleDetailsHeader'>{name}</h2>
      {type !== null &&
        <div className='data-row'>
          <h3>type:</h3><span>{typeNormalized}</span>
        </div>
      }
      {color !== null &&
        <div className='data-row'>
          <h3>color:</h3><span>{colorNormalized}</span>
        </div>
      }
      {platesNumber !== null &&
        <div className='data-row'>
          <h3>plates number:</h3><span>{platesNumber}</span>
        </div>
      }
      {rangeKm !== null &&
        <div className='data-row'>
          <h3>range km:</h3><span>{rangeKm}km</span>
        </div>
      }
      {batteryLevelPct !== null &&
        <div className='data-row'>
          <h3>battery:</h3><span>{batteryLevelPct}%</span>
        </div>
      }
      {status !== null &&
        <div className='data-row--important'>
          <h3>status:</h3><span>{statusNormalized}</span>
        </div>
      }
    </DetailsPopupStyled>
  );
}
