import { vehicleMarkerConfig } from "../config";


export const setVehicleStatusIcon = (status) => {
  for (let icon of vehicleMarkerConfig.statusIcons) {
    if (icon.status.toLowerCase() === status.toLowerCase() || icon.status === 'default') {
      return icon.iconUrl;
    }
  }
};

export const setVehicleBatteryIcon = (batteryLevelPct) => {
  for (let icon of vehicleMarkerConfig.batteryLevelIcons) {
    if (icon.batteryPercent <= batteryLevelPct) {
      return icon.iconUrl;
    }
  }
};

export const setVehicleDefaultIcon = () => {
  return vehicleMarkerConfig.defaultIconUrl;
};