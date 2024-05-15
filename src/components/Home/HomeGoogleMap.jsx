import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '40rem'
};

const center = {
  lat: 23.810331,
  lng: 90.412521
};

const HomeGoogleMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBLOuahV5t9-EAd3jea9sE8qAtR93jeowY"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
            streetViewControl: false,
            mapTypeControl: false
        }}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <section>
        <div className="relative">

          <div className="mx-auto hidden xl:block" style={{maxWidth: "780px"}}>
            <div className="max-w-7xl bg-sky-700 p-3 pl-6 pr-6 rounded-xl mt-56">
              <div className="bg-sky-100 rounded-3xl p-8">
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36">
                  <option disabled selected>DIVISION</option>
                  <option>Item</option>
                </select>
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-40">
                  <option disabled selected>DISTRICT</option>
                  <option>Item</option>
                </select>
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36">
                  <option disabled selected>THANA</option>
                  <option>Item</option>
                </select>
                <div className="relative hidden md:inline-block">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="w-4 h-4 text-sky-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input type="text" id="search-navbar" className="search inline-block max-w-36 p-3 text-sm border border-blue-600 rounded-lg bg-sky-300 focus:ring-blue-500 focus:border-blue-500 placeholder:text-sky-700 placeholder:font-semibold" placeholder="FIND BATTERY" />
                </div>
              </div>
            </div>
          </div>

          <div className="slider-container w-10/12 mx-auto xl:hidden max-w-sm">
            <h1 className="uppercase text-center text-lg text-sky-100 font-semibold pt-8 pb-8">choose your product</h1>
            <div className="bg-sky-100 p-6 rounded-lg mx-auto mt-8" style={{maxWidth: "21.5rem"}}>
              <div className="grid grid-cols-2 gap-2">
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36 text-xs">
                  <option disabled selected>DIVISION</option>
                  <option>Item</option>
                </select>
                <select className="select select-bordered uppercase bg-primary text-sky-100 mr-6 w-36 text-xs">
                  <option disabled selected>DISTRICT</option>
                  <option>Item</option>
                </select>
              </div>
              <div className="relative text-center mt-4">
                  <div className="absolute inset-y-0 right-16 flex items-center pr-5 pointer-events-none">
                    <svg className="w-4 h-4 text-sky-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input type="text" id="search-navbar" className="search inline-block max-w-40 p-3 text-sm border border-blue-600 rounded-lg bg-sky-300 focus:ring-blue-500 focus:border-blue-500 placeholder:text-sky-700 placeholder:font-semibold" placeholder="FIND BATTERY" />
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