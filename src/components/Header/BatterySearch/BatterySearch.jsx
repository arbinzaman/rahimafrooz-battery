import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const fetchBatteryData = async () => {
  const response = await fetch(`${import.meta.env.VITE_BASE_URL}/batteries`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const BatterySearch = ({ searchData }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["batteries"],
    queryFn: fetchBatteryData,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      const matchedBattery = data.find(
        (battery) =>
          battery.battery_name.toLowerCase() === searchData.toLowerCase()
      );
      if (matchedBattery) {
        navigate(`/product-final-page/${matchedBattery.short_code}`);
      }
    }
  }, [data, searchData, navigate]);

  if (isLoading) return <div></div>;

  const filteredBatteries = Array.isArray(data)
    ? data.filter(
        (battery) =>
          battery.battery_name
            .toLowerCase()
            .includes(searchData.toLowerCase()) ||
          battery.series.toLowerCase().includes(searchData.toLowerCase()) ||
          battery.item_code.toLowerCase().includes(searchData.toLowerCase()) ||
          battery.model.toLowerCase().includes(searchData.toLowerCase())
      )
    : [];

  return (
    <div className="absolute z-10 w-full bg-white shadow-lg rounded-lg">
      {searchData !== "" &&
        filteredBatteries.map((battery) => (
          <div key={battery.id}>
            <ul className="menu dropdown-content menu-xs text-black rounded-box w-56">
              <li className="">
                <a
                  href="#"
                  className="hover:bg-gray-200 hover:w-fit"
                  onClick={() => {
                    navigate(`/product-final-page/${battery.short_code}`);
                    window.location.reload();
                  }}
                >
                  {battery.battery_name}
                </a>
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default BatterySearch;
