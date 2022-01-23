import { vehicleMarkerConfig } from "../config/config";

const { width, height } = vehicleMarkerConfig.iconSize;

export const setVehicleStatusIcon = (status) => {
  for (let icon of vehicleMarkerConfig.statusIcons) {
    if (icon.status.toLowerCase() === status.toLowerCase() || icon.status === 'default') {
      const icn = {
        url: icon.iconUrl,
        scaledSize: new window.google.maps.Size(width, height)
      };
      return icn;
    }
  }
};

export const setVehicleBatteryIcon = (batteryLevelPct) => {
  for (let icon of vehicleMarkerConfig.batteryLevelIcons) {
    if (icon.batteryPercent <= batteryLevelPct) {
      const icn = {
        url: icon.iconUrl,
        scaledSize: new window.google.maps.Size(width, height)
      };
      return icn;
    }
  }
};

export const setVehicleDefaultIcon = () => {
  const icn = {
    url: vehicleMarkerConfig.defaultIconUrl,
    scaledSize: new window.google.maps.Size(width, height)
  };
  return icn;
};