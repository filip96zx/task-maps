import styles from '../globalStyles/variables';

const config = {
  vehicleDummyData: true,
  apiURL: 'https://dev.vozilla.pl/api-client-portal/',
  googleMapsApiKey: "AIzaSyAHyW0XtPY3HlbyMHEgHvGcRfNlkjbgsdk",
  mapContainerStyle: {
    width: '100%',
    height: '100%',
  },
  //// markers settings
  defaultMarkerColor: styles.secondaryColor,
  iconScale: 1,
  vehicleMarkerConfig: {
    batteryLevelIcons: [
      {
        batteryPercent: 85,
        color: 'rgba(14,176,114,255)'
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
        color: 'rgba(14,176,114,255)'
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
  }
}

export default config

