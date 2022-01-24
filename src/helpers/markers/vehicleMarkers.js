import config from '../../config/config';
import markerColor from './defaultMarkers';



export const setVehicleStatusIcon = (status) => {
  for (let icon of config.vehicleMarkerConfig.statusIcons) {
    if (icon.status === status.toLowerCase() || icon.status === 'default') {

      return markerColor(icon.color);
    }
  }
};

export const setVehicleBatteryIcon = (batteryLevelPct) => {
  for (let icon of config.vehicleMarkerConfig.batteryLevelIcons) {
    if (icon.batteryPercent <= batteryLevelPct) {

      return markerColor(icon.color);
    }
  }
};
