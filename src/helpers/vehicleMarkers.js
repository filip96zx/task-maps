import { vehicleMarkerConfig } from "../config/config";

const markerColor = (color) => {
  const svgMarker = {
    path: "M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z",
    fillColor: color,
    fillOpacity: 0.8,
    strokeWeight: 2,
    strokeColor:'rgba(50,50,50,0.8)',
    rotation: 0,
    scale: vehicleMarkerConfig.iconScale,
  };
  return svgMarker;
};

export const setVehicleStatusIcon = (status) => {
  for (let icon of vehicleMarkerConfig.statusIcons) {
    if (icon.status.toLowerCase() === status.toLowerCase() || icon.status === 'default') {

      return markerColor(icon.color);
    }
  }
};

export const setVehicleBatteryIcon = (batteryLevelPct) => {
  for (let icon of vehicleMarkerConfig.batteryLevelIcons) {
    if (icon.batteryPercent <= batteryLevelPct) {

      return markerColor(icon.color);
    }
  }
};

export const setVehicleDefaultIcon = () => {
  return markerColor(vehicleMarkerConfig.defaultIconColor);
};