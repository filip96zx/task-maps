export const useVehicleDummyData = true;

export const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

export const googleMapsApiKey = "AIzaSyAHyW0XtPY3HlbyMHEgHvGcRfNlkjbgsdk";

export const vehicleMarkerConfig = {
  defaultIconUrl: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
  iconSize: {
    width: 40,
    height: 40
  },
  batteryLevelIcons: [
    {
      batteryPercent: 90,
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    },
    {
      batteryPercent: 75,
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
    },
    {
      batteryPercent: 50,
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/orange-dot.png'
    },
    // start form 0
    {
      batteryPercent: 0,
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    }
  ],
  statusIcons: [
    {
      status: 'available',
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    },
    {
      status: 'inaccessible',
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    },
    // dafault has to be last
    {
      status: 'default',
      iconUrl: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    }
  ]
};