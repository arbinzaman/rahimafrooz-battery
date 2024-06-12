import { useState } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '40rem'
};

const center = {
  lat: 23.80877701641804,
  lng: 90.41659572154543
};

const dealerLocations = [
  {
    lat: 23.805321812817635,
    lng: 90.41419246228946
  },
  {
    lat: 25.6239445425306,
    lng: 88.64470615491153
  },
  {
    lat: 21.24560425883141,
    lng: 92.13884431593026
  },
  {
    lat: 20.858307994681518,
    lng: 92.29705430327084
  },
  {
    lat: 23.86136128847517,
    lng: 90.00006428161618
  },
  {
    lat: 23.997847461055187,
    lng: 90.25178419471742
  },
  {
    lat: 24.009775401587362,
    lng: 91.11451504876106
  },
  {
    lat: 24.90558572740873,
    lng: 91.86103476447003
  },
  {
    lat: 23.451025884973767,
    lng: 91.18435743820645
  },
  {
    lat: 23.99102909293552,
    lng: 90.38771254726828
  },
  {
    lat: 24.105685939708085,
    lng: 90.10471334196873
  },
  {
    lat: 24.39072291298003,
    lng: 89.99315498926845
  },
  {
    lat: 24.612333824118316,
    lng: 90.03144272649921
  },
  {
    lat: 23.6450199438615,
    lng: 90.49230705040574
  },
  {
    lat: 24.012929769911047,
    lng: 89.24660146593992
  },
]

const HomeGoogleMap = () => {
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
    >
      { /* Child components, such as markers, info windows, etc. */}
      {dealerLocations.map((location) => (
        <MarkerF position={location} />
      ))}
      <section>
        <div className="relative">

          <div className="mx-auto hidden xl:block" style={{ maxWidth: "780px" }}>
            <div className="max-w-7xl bg-sky-700 p-3 pl-6 pr-6 rounded-xl mt-56">
              <div className="bg-sky-100 rounded-3xl p-8">
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36">
                  <option disabled selected>DIVISION</option>
                  <option>Dhaka</option>
                </select>
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-40">
                  <option disabled selected>DISTRICT</option>
                  <option>Dhaka</option>
                </select>
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36">
                  <option disabled selected>THANA</option>
                  <option>Khilgoan</option>
                </select>
                <div className="relative hidden md:inline-block" onClick={() => map.panTo(center)}>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="w-4 h-4 text-sky-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input type="text" id="search-navbar" className="search cursor-pointer inline-block max-w-36 p-3 text-sm border border-blue-600 rounded-lg bg-sky-300 focus:ring-blue-500 focus:border-blue-500 placeholder:text-sky-700 placeholder:font-semibold" placeholder="FIND DEALER" />
                </div>
              </div>
            </div>
          </div>

          <div className="slider-container w-10/12 mx-auto xl:hidden max-w-sm">
            <div className="bg-sky-100 p-6 rounded-lg mx-auto mt-32" style={{ maxWidth: "21.5rem" }}>
              <div className="grid grid-cols-2 gap-2">
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36 text-xs">
                  <option disabled selected>DIVISION</option>
                  <option>Dhaka</option>
                </select>
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36 text-xs">
                  <option disabled selected>DISTRICT</option>
                  <option>Dhaka</option>
                </select>
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36 text-xs">
                  <option disabled selected>Thana</option>
                  <option>Khilgoan</option>
                </select>
                <div className="relative text-center">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-4 h-4 text-sky-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input type="text" id="search-navbar" className="search inline-block max-w-36 p-3 text-sm border border-blue-600 rounded-lg bg-sky-300 focus:ring-blue-500 focus:border-blue-500 placeholder:text-sky-700 placeholder:font-semibold" placeholder="FIND DEALER" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
      <></>
    </GoogleMap>
  ) : <></>
}

export default HomeGoogleMap;