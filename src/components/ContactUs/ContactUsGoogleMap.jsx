import { useCallback, useEffect, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import axios from "axios";

const containerStyle = {
  width: "100%",
  height: "40rem",
};

const center = {
  lat: 23.769018489724033,
  lng: 90.39387826503851,
};

const ContactUsGoogleMap = () => {
  const [locations, setLocations] = useState();
  const url = `${import.meta.env.VITE_BASE_URL}/contact/global-locations`;

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await axios.get(url);
        // console.log(first);
        setLocations(res?.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchLocations();
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(mapInstance) {
    setMap(mapInstance);
  }, []);

  const handleMarkerClick = (location) => {
    if (map) {
      map.panTo(location);
      map.setZoom(20);
    }
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={4}
      onLoad={onLoad}
      onUnmount={() => setMap(null)}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: true,
      }}
    >
      {locations?.map((location, i) => (
        <Marker
          key={i}
          position={{ lat: location?.lat, lng: location?.lng }}
          onClick={() => handleMarkerClick(location)}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default ContactUsGoogleMap;
