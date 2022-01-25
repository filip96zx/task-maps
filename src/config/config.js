import styles from '../globalStyles/variables';

const config = {
  vehicleDummyData: true, // if true use random generated data else fetch from api
  parkingDummyData: false, // if true use random generated data else fetch from api
  poiDummyData: false,
  apiURL: 'https://dev.vozilla.pl/api-client-portal/',
  googleMapsApiKey: "AIzaSyAHyW0XtPY3HlbyMHEgHvGcRfNlkjbgsdk",
  //map start config
  mapCenter: { lat: 0, lng: 0 }, // <-not working as expected
  mapZoomLevel: 7,
  mapStartingBound:{
    northEastCorner: { lat: 53.711824285745936, lng: 13.812720459480817 },  // <- this works for set starting bound
    southWestCorner:  { lat: 50.29074828557042, lng: 24.048221304405697 }
  },
  mapContainerStyle: {
    width: '100%',
    height: '100%',
  },
  // markers settings
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
  },
  parkingMarkerConfig: {
    spacesStatusIcons: [
      {
        freeSpaces: true,
        color: 'rgba(14,176,114,255)'
      },
      {
        freeSpaces: false,
        color: 'darkred'
      },
    ],
    chargersStatusIcons: [
      {
        charger: true,
        color: 'rgba(14,176,114,255)'
      },
      {
        charger: false,
        color: 'darkred'
      },
    ]

  }
}

export default config

