import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '40rem'
};

const center = {
  lat: 23.80877701641804,
  lng: 90.41659572154543
};

const ContactUsGoogleMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  })

  const [map, setMap] = useState( /** @type google.maps.Map */ (null))

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={(map) => setMap(map)}
        options={{
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false
        }}
      />
      
  ) : <></>
}

export default ContactUsGoogleMap;