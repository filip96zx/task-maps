import config from "../../config/config";
import { markerColor } from './defaultMarkers';

export const setParkingHasFreeSpaceIcon = (hasFreeSpace) => {
  for (let icon of config.parkingMarkerConfig.spacesStatusIcons) {
    if (icon.freeSpaces === hasFreeSpace) {
      return markerColor(icon.color);
    }
  }
};

export const setParkingsHasChargersIcon = (hasCharger) => {
  for (let icon of config.parkingMarkerConfig.chargersStatusIcons) {
    if (icon.charger === hasCharger) {
      return markerColor(icon.color);
    }
  }
};