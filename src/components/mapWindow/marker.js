import { Marker as GoogleMarker } from "@react-google-maps/api";



function Marker(props) {
  const { clusterer, data } = props;

  const convertLocation = (location) => {
    return {
      lat: location.latitude,
      lng: location.longitude
    };
  };

  if (data.discriminator.toLowerCase() === 'vehicle') {

    return (
      <GoogleMarker position={convertLocation(data.location)} clusterer={clusterer} />

    );
  }
}

export default Marker;