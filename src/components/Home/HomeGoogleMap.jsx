import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { IoSearchSharp } from "react-icons/io5";

const containerStyle = {
  width: "100%",
  height: "40rem",
};

const center = {
  lat: 23.810331,
  lng: 90.412521,
};

const HomeGoogleMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBLOuahV5t9-EAd3jea9sE8qAtR93jeowY",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleGoToLocation = (e) => {
    e.preventDefault();
  };
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        streetViewControl: false,
        mapTypeControl: false,
      }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <section>
        <div className="relative ">
          <div
            className="mx-auto hidden xl:block"
            style={{ maxWidth: "780px" }}
          >
            <div className="bg-[#005bab] p-3 rounded-xl border border-background mx-8 my-10 text-xxsmall mt-56">
              <div className="bg-background mx-0 py-6 rounded-md">
                <form
                  action=""
                  className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-2"
                  onSubmit={handleGoToLocation}
                >
                  <select
                    name="division"
                    id="cars"
                    className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                  >
                    <option value="">Division</option>
                    <option value="">Dhaka</option>
                  </select>

                  <select
                    name="district"
                    id="cars"
                    className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                  >
                    <option value="">District</option>
                    <option value="">Dhaka</option>
                    <option value="">Manikganj</option>
                  </select>

                  <select
                    name="area"
                    id="cars"
                    className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                  >
                    <option value="">Area</option>
                    <option value="">Banani</option>
                    <option value="">Dhanmondi</option>
                    <option value="">Uttara</option>
                  </select>

                  <button
                    type="submit"
                    className="flex items-center justify-center col-span-2 md:col-span-1 bg-button2 text-primary font-semibold px-3 py-2 rounded-md border border-primary"
                  >
                    <p className="mx-2">Find Battery</p>
                    <IoSearchSharp />
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="slider-container w-10/12 mx-auto xl:hidden max-w-sm">
            <div className="bg-[#005bab] p-3 rounded-xl border border-background mx-8 my-10 text-xxsmall mt-56">
              <div className="bg-background mx-0 py-6 rounded-md">
                <form
                  action=""
                  className="grid grid-cols-1 gap-4 mx-2"
                  onSubmit={handleGoToLocation}
                >
                  <select
                    name="division"
                    id="cars"
                    className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                  >
                    <option value="">Division</option>
                    <option value="">Dhaka</option>
                  </select>

                  <select
                    name="district"
                    id="cars"
                    className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                  >
                    <option value="">District</option>
                    <option value="">Dhaka</option>
                    <option value="">Manikganj</option>
                  </select>

                  <select
                    name="area"
                    id="cars"
                    className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                  >
                    <option value="">Area</option>
                    <option value="">Banani</option>
                    <option value="">Dhanmondi</option>
                    <option value="">Uttara</option>
                  </select>

                  <button
                    type="submit"
                    className="flex items-center justify-center col-span-2 md:col-span-1 bg-button2 text-primary font-semibold px-3 py-2 rounded-md border border-primary"
                  >
                    <p className="mx-2">Find Battery</p>
                    <IoSearchSharp />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default HomeGoogleMap;
