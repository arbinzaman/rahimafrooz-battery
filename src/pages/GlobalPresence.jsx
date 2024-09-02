import { useQuery } from "@tanstack/react-query";
import banner from "../assets/images/7. Global Presence.png";
import GlobalPresenceSlider from "../components/GlobalPresence/GlobalPresenceSlider";
import InternationalOperations from "../components/GlobalPresence/InternationalOperations";
import { allDeviceMaxWidth } from "../styles/maxWidth";

const GlobalPresence = () => {
  // Fetch the country list from the global presence API
  const fetchCountries = async () => {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/global-presence`);
    if (!res.ok) {
      throw new Error("Error fetching countries");
    }
    return res.json();
  };

  const { data: countryList = [] } = useQuery({
    queryKey: ["countryList"],
    queryFn: fetchCountries,
    refetchOnWindowFocus: false, // Don't refetch when window is focused
  });

  // Calculate the total number of countries
  const totalCountries = countryList.reduce((acc, continent) => {
    return acc + continent.countries.length;
  }, 0);

  return (
    <section>
      {/* Banner Section */}
      <div className="relative">
        <img src={banner} alt="Global Presence" className="w-full" />
        {/* Display total countries and country list at the bottom left of the banner */}
        <div className="absolute bottom-0 left-4 lg:left-8 text-primary text-large lg:p-6 rounded text-center">
          {/* Responsive Text for Mobile */}
          <p className="text-primary text-[8px] lg:text-medium -mt-[3px] font-bold">
            Our automotive batteries
          </p>
          <p className="text-black text-[9px] lg:text-regular -mt-[3px] ">
            reach consumers
          </p>
          <p className="text-black text-[9px] lg:text-regular -mt-[3px] ">
            in more than
          </p>
          <p className="font-extrabold text-lg lg:text-xlarge -mt-[7px] lg:mt-2 -mb-[20px] lg:mb-2">
            {totalCountries}
          </p>

          {/* Added border to this span */}
          <span className="border border-blue-700 p-1 lg:p-2 rounded-sm inline-block -mt-[3px] lg:mt-0">
            <p className="text-black text-[8px] lg:text-regular -mt-[5px]  font-extrabold">
              COUNTRIES
            </p>
            <p className="text-black text-[8px] lg:text-regular -mb-[5px] -mt-[3px] lg:-mt-2">
              across the world
            </p>
          </span>
        </div>
      </div>

      {/* Main Content Section */}
      <div
        className={
          allDeviceMaxWidth +
          " grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-48 text-center m-0 lg:mb-10 mt-10 bg-background text-black"
        }
      >
        {/* International Operations */}
        <InternationalOperations />

        {/* Global Presence Slider */}
        <div className="bg-primary mb-7">
          <GlobalPresenceSlider />
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
