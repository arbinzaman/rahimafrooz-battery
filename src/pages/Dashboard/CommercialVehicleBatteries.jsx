import { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FaCarBattery } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/shared/Loader";

const CommercialVehicleBatteries = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [filteredBatteries, setFilteredBatteries] = useState([]);
//   const [lastFetched, setLastFetched] = useState(null);

  const url = `https://rahimafrooz-battery-backend.vercel.app/api/v1/filtered-vehicle-batteries`;

  const {
    data: commercialVehicleBatteries = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["commercialVehicleBatteries"],
    queryFn: async () => {
      console.log("Fetching data...");
      const res = await fetch(url);
      const data = await res.json();
      console.log("Data fetched:", data);
      return data;
    },
    refetchInterval: 60000, 
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    console.log("Filtering data...");
    const filtered = commercialVehicleBatteries.filter((battery) =>
      battery.applications.includes("Commercial Vehicle")
    );
    setFilteredBatteries(filtered);
    // setLastFetched(new Date().toLocaleTimeString());
  }, [commercialVehicleBatteries]);

  const handleCheckboxChange = (id) => {
    setSelectedIds((prevSelectedIds) => {
      const updatedSelectedIds = prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id];

      setSelectAll(updatedSelectedIds.length === filteredBatteries.length);
      return updatedSelectedIds;
    });
  };

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedIds([]);
    } else {
      const allIds = filteredBatteries.map((battery) => battery.id);
      setSelectedIds(allIds);
    }
    setSelectAll(!selectAll);
  };

  const handleDelete = async () => {
    console.log(selectedIds);
    await refetch();
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        Commercial Vehicle Batteries
      </h1>
      <div className="flex gap-4">
        <button className="flex gap-2 btn btn-xs">
          Add Commercial Vehicle Battery <FaCarBattery />
        </button>
        <button className="flex gap-2 btn btn-xs" onClick={handleDelete}>
          Delete
          <MdDeleteOutline />
        </button>
      </div>

      {/* <div className="mb-4">
        <p>Last fetched: {lastFetched}</p>
      </div> */}

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={handleSelectAllChange}
                  checked={selectAll}
                />
                Select All
              </th>
              <th>Serial</th>
              <th>Technology</th>
              <th>Vehicle Make & Model</th>
              <th>Make Year</th>
              <th>Recommended Battery</th>
            </tr>
          </thead>
          <tbody>
            {filteredBatteries.map((commercialVehicleBattery, i) => (
              <tr key={commercialVehicleBattery.id}>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(commercialVehicleBattery.id)}
                    checked={selectedIds.includes(commercialVehicleBattery.id)}
                  />
                </td>
                <th>{i + 1}</th>
                <td>{commercialVehicleBattery.technology}</td>
                <td>
                  {commercialVehicleBattery.supported_vehicle_models.map((makeModel, index) => (
                    <div key={index}>
                      <strong>{makeModel.make}</strong>:
                      {makeModel.models.join(", ").split(" ")
                        .map((word, idx) => (
                          <span key={idx} className={idx % 4 === 3 ? "block" : ""}>
                            {word}
                          </span>
                        ))}
                    </div>
                  ))}
                </td>
                <td>
                  {commercialVehicleBattery.make_years.map((makeYear, idx) => (
                    <div key={idx}>
                      <strong>{makeYear.model}</strong>:{" "}
                      {makeYear.years.join(", ").split(" ")
                        .map((word, index) => (
                          <span key={index} className={index % 4 === 3 ? "block" : ""}>
                            {word}
                          </span>
                        ))}
                    </div>
                  ))}
                </td>
                <td>{commercialVehicleBattery.brand}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommercialVehicleBatteries;
