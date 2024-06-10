import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const ProductSearchField = () => {
  const [category, setCategory] = useState("");

  const [technologies, setTechnologies] = useState([]);
  const [technology, setTechnology] = useState("");

  const [vehicleMakes, setVehicleMakes] = useState([]);
  const [brand, setBrand] = useState("");

  const [vehicleModels, setVehicleModels] = useState([]);
  const [model, setModel] = useState("");

  const [makeYears, setMakeYears] = useState([]);
  const [shortCodes, setShortCodes] = useState([]);

  const [queryDatas, setQueryDatas] = useState({
    technology: "",
    brand: "",
    model: "",
    year: "",
  });

  // Fetching Categories
  const CATEGORIES_API_URL = `https://rahimafrooz-battery-backend.vercel.app/api/v1/categories`;
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(CATEGORIES_API_URL);
      const data = await res.json();
      return data;
    },
  });

  // Fetching Technologies
  const fetchTechnologies = async (category_id) => {
    setCategory(category_id);
    const TECHNOLOGIES_API_URL = `https://rahimafrooz-battery-backend.vercel.app/api/v1/filtered-vehicle-batteries/${category_id}`;
    const res = await axios.get(TECHNOLOGIES_API_URL);
    setTechnologies(res.data);
  };

  // Fetching Brands
  const fetchBrands = async (technology) => {
    setTechnology(technology);
    const VEHICLE_MAKES_API_URL = `https://rahimafrooz-battery-backend.vercel.app/api/v1/filtered-vehicle-batteries/${category}/${technology}`;
    const res = await axios.get(VEHICLE_MAKES_API_URL);
    setVehicleMakes(res.data);
  };

  // Fetching Models according to brands
  const fetchModels = async (brand) => {
    setBrand(brand);
    const MODELS_API_URL = `https://rahimafrooz-battery-backend.vercel.app/api/v1/filtered-vehicle-batteries/${category}/${technology}/${brand}`;
    const res = await axios.get(MODELS_API_URL);
    setVehicleModels(res.data);
  };

  // Fetching Make Years
  const fetchMakeYears = async (model) => {
    setModel(model);
    const MAKE_YEARS_API_URL = `https://rahimafrooz-battery-backend.vercel.app/api/v1/filtered-vehicle-batteries/${category}/${technology}/${brand}/${model}`;
    const res = await axios.get(MAKE_YEARS_API_URL);
    setMakeYears(res.data);
  };

  // Fetching Batteries
  const fetchBatteries = async (makeYear) => {
    const BATTERY_SHORT_CODES_API_URL = `https://rahimafrooz-battery-backend.vercel.app/api/v1/filtered-vehicle-batteries/${category}/${technology}/${brand}/${model}/${makeYear}`;
    const res = await axios.get(BATTERY_SHORT_CODES_API_URL);
    setShortCodes(res.data)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQueryDatas((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFindBattery = (e) => {
    e.preventDefault();
    window.localStorage.setItem(
      "short_codes",
      JSON.stringify(shortCodes || "")
    );
    window.localStorage.setItem(
      "query_datas",
      JSON.stringify(queryDatas || "")
    );
    window.location.reload();
  };
  return (
    <div className="bg-[#005bab] p-6 rounded-xl border border-background my-10 max-w-screen-2xl mx-10 lg:mx-auto ">
      <div className="bg-background mx-2 py-6 rounded-md">
        <form action="" className="grid grid-cols-1 lg:grid-cols-6 gap-4 mx-5">
          {/* Category Select */}
          <div>
            <select
              name="category"
              id="cars"
              className="select select-bordered bg-secondary text-white font-semibold px-3 py-2 rounded-md w-full"
              defaultValue={"Hybrid"}
              onChange={(e) => {
                fetchTechnologies(e.target.value);
              }}
            >
              <option>Select Category</option>
              {categories.length > 0
                ? categories?.map((category) => (
                    <option
                      key={category?.category_id}
                      value={category?.category_id}
                    >
                      {category?.category_name}
                    </option>
                  ))
                : <option></option>}
            </select>
            <small className="text-gray-600">e.g: Passenger Car</small>
          </div>

          {/* Hybrid/Non-hybrid Select */}
          <div>
            <select
              name="technology"
              id="cars"
              className="select select-bordered bg-secondary text-white font-semibold px-3 py-2 rounded-md w-full"
              value={queryDatas.technology}
              onChange={(e) => {
                fetchBrands(e.target.value);
                handleChange(e);
              }}
              disabled={category == 1 || category == 2 ? false : true}
              defaultValue={"Hybrid"}
            >
              <option>Hybrid/Non-Hybrid</option>
              {(technologies.length !== 0 || technologies !== undefined) &&
                technologies?.map((tech, i) => (
                  <option value={tech.technology} key={i}>
                    {tech.technology}
                  </option>
                ))}
            </select>
            <small className="text-gray-600">e.g: Non-Hybrid</small>
          </div>

          {/* Brand Select */}
          <div>
            <select
              name="brand"
              id="cars"
              className="select select-bordered bg-secondary text-white font-semibold px-3 py-2 rounded-md w-full"
              value={queryDatas.brand}
              onChange={(e) => {
                fetchModels(e.target.value);
                handleChange(e);
              }}
              disabled={category == 1 || category == 2 ? false : true}
            >
              <option>Select Brand</option>
              {(vehicleMakes.length !== 0 || vehicleMakes !== undefined) &&
                vehicleMakes?.map((make, i) => (
                  <option key={i} value={make.supported_vehicle_make}>
                    {make.supported_vehicle_make}
                  </option>
                ))}
            </select>
            <small className="text-gray-600">e.g: Honda</small>
          </div>

          {/* Model Select */}
          <div>
            <select
              name="model"
              id="cars"
              className="select select-bordered bg-secondary text-white font-semibold px-3 py-2 rounded-md w-full"
              value={queryDatas.model}
              onChange={(e) => {
                fetchMakeYears(e.target.value);
                handleChange(e);
              }}
              disabled={category == 1 || category == 2 ? false : true}
            >
              <option>Select Model</option>
              {(vehicleModels.length !== 0 || vehicleModels !== undefined) &&
                vehicleModels?.map((model, i) => (
                  <option key={i} value={model.model}>
                    {model.model}
                  </option>
                ))}
            </select>
            <small className="text-gray-600">e.g: Civic</small>
          </div>

          {/* Select Year */}
          <div>
            <select
              name="year"
              id="cars"
              className="select select-bordered bg-secondary text-white font-semibold px-3 py-2 rounded-md w-full"
              value={queryDatas.year}
              onChange={(e) => {
                fetchBatteries(e.target.value);
                handleChange(e);
              }}
              disabled={category == 1 || category == 2 ? false : true}
            >
              <option>Select Year</option>
              {(makeYears.length !== 0 || makeYears !== undefined) &&
                makeYears.map((year, i) => (
                  <option key={i} value={year.year}>
                    {year.year}
                  </option>
                ))}
            </select>
            <small className="text-gray-600">e.g:2015</small>
          </div>

          <div>
            <button
              className="flex items-center justify-center bg-button2 text-primary font-semibold px-3 py-[10.5px] rounded-md border border-primary"
              onClick={handleFindBattery}
            >
              <p className="mx-2">Find Battery</p>
              <IoSearchSharp />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductSearchField;
