import styles from '../globalStyles/variables';

export const useVehicleDummyData = true;

export const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

export const googleMapsApiKey = "AIzaSyAHyW0XtPY3HlbyMHEgHvGcRfNlkjbgsdk";

export const vehicleMarkerConfig = {
  defaultIconColor: styles.secondaryColor,
  iconScale: 1,
  batteryLevelIcons: [
    {
      batteryPercent: 85,
      color: styles.secondaryColor
    },
    {
      batteryPercent: 65,
      color: 'rgb(214, 204, 2)'
    },
    {
      batteryPercent: 40,
      color: 'orange'
    },
    // start form 0
    {
      batteryPercent: 0,
      color: 'darkred',
    }
  ],
  statusIcons: [
    {
      status: 'available',
      color: styles.secondaryColor
    },
    {
      status: 'inaccessible',
      color: 'darkred'
    },
    // dafault has to be last
    {
      status: 'default',
      color: 'rgb(10, 123, 252)'
    }
  ]
};