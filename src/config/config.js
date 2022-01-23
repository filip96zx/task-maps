export const useVehicleDummyData = true;

export const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

export const googleMapsApiKey = "AIzaSyAHyW0XtPY3HlbyMHEgHvGcRfNlkjbgsdk";

export const vehicleMarkerConfig = {
  defaultIconColor:'rgb(10, 123, 252)',
  iconScale: 1,
  batteryLevelIcons: [
    {
      batteryPercent: 85,
      color: 'green'
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
      color: 'green'
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