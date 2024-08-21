import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { allDeviceMaxWidth } from "../../styles/maxWidth";

const HomeDealerLocator = () => {
  const navigate = useNavigate();
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [thana, setThana] = useState("");

  const { data: dealerLocs = [] } = useQuery({
    queryKey: ["dealerLocs"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/dealer-details/`
      );
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  const getUniqueDivisions = (data) => {
    return [
      ...new Set(Array.isArray(data) && data?.map((item) => item?.division)),
    ];
  };

  const divisions = getUniqueDivisions(dealerLocs);

  // Function to get districts of a selected division
  const getDistrictsByDivision = (division) => {
    const filteredDistricts = dealerLocs
      ?.filter((item) => item?.division === division)
      ?.map((item) => item?.district);

    return [...new Set(filteredDistricts)];
  };

  // Function to get thanas of a selected district
  const getThanasByDistrict = (district) => {
    const filteredThanas = dealerLocs
      ?.filter((item) => item.district === district)
      ?.map((item) => item.thana);

    return [...new Set(filteredThanas)];
  };

  // Function to get the data object of a selected thana
  const getDataByThana = (thana) => {
    return dealerLocs?.filter((item) => item.thana === thana);
  };

  const filteredDistricts = getDistrictsByDivision(division);
  const filteredThanas = getThanasByDistrict(district);
  const location = getDataByThana(thana);

  const handleFindDealer = (e) => {
    e.preventDefault();
    const ids = location.map((item) => item?.id);
    localStorage.setItem("dealers_id", JSON.stringify(ids));
    navigate("/find-dealer");
    window.location.reload(false);
  };

  return (
    <section className={allDeviceMaxWidth}>
      <h1 className="uppercase text-center text-medium lg:text-large text-primary font-semibold pt-10 lg:pt-20">
        Find Rahimafrooz Dealer
      </h1>
      <section className="flex justify-center">
        <div className="bg-[#005bab] py-2 px-4 my-10 lg:mb-20 rounded-xl w-2/3 lg:mx-auto">
          <div className="bg-background lg:mx-2 py-3 lg:py-6 rounded-md">
            <form
              action=""
              className="flex flex-col lg:flex-row items-center justify-center gap-4 mx-5"
            >
              {/* Division Select */}
              <div>
                <select
                  name="category"
                  id="cars"
                  className="select select-sm select-bordered bg-secondary text-white font-semibold px-10 mt-2 rounded-md w-44"
                  onChange={(e) => {
                    setDivision(e.target.value);
                  }}
                >
                  <option>Division</option>
                  {divisions?.length > 0 ? (
                    divisions.map((div, i) => (
                      <option key={i} value={div}>
                        {div}
                      </option>
                    ))
                  ) : (
                    <option>Please Wait..</option>
                  )}
                </select>
              </div>

              {/* District Select */}
              <div>
                <select
                  name="technology"
                  id="cars"
                  className="select select-sm select-bordered bg-secondary text-white font-semibold px-10 mt-2 rounded-md w-44"
                  onChange={(e) => {
                    setDistrict(e.target.value);
                  }}
                >
                  <option>District</option>
                  {filteredDistricts.length > 0 ? (
                    filteredDistricts.map((dist, i) => (
                      <option key={i} value={dist}>
                        {dist}
                      </option>
                    ))
                  ) : (
                    <option>Please Wait..</option>
                  )}
                </select>
              </div>

              {/* Thana Select */}
              <div>
                <select
                  name="brand"
                  id="cars"
                  className="select select-sm select-bordered bg-secondary text-white font-semibold px-10 mt-2 rounded-md w-44"
                  onChange={(e) => {
                    setThana(e.target.value);
                  }}
                >
                  <option>Thana</option>
                  {filteredThanas?.length > 0 ? (
                    filteredThanas?.map((div, i) => (
                      <option key={i} value={div}>
                        {div}
                      </option>
                    ))
                  ) : (
                    <option>Please Wait..</option>
                  )}
                </select>
              </div>
              <div>
                <button
                  onClick={handleFindDealer}
                  className="flex items-center justify-center bg-button2 text-primary font-semibold px-10 py-[3px] lg:mt-2  rounded-md border border-primary"
                >
                  <p className="mx-2">Search</p>
                  <IoSearchSharp />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomeDealerLocator;
