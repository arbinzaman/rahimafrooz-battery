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

  // Fetching Categories
  const CATEGORIES_API_URL = `https://rahimafrooz-battery-backend.vercel.app/api/v1/categories`;
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(CATEGORIES_API_URL);
      const data = await res.json();
      return data;
    },
    refetchInterval: 600,
    refetchOnWindowFocus: true,
  });
  // console.log(categories);

  // Fetching Technologies
  const fetchTechnologies = async (category_id) => {
    setCategory(category_id);
    const TECHNOLOGIES_API_URL = `https://rahimafrooz-battery-backend.vercel.app/api/v1/filtered-vehicle-batteries/${category_id}`;
    const res = await axios.get(TECHNOLOGIES_API_URL);
    setTechnologies(res.data);
    console.log(res.data);
  };

  // Fetching Brands
  const fetchBrands = async (technology) => {
    setTechnology(technology);
    const VEHICLE_MAKES_API_URL = `https://rahimafrooz-battery-backend.vercel.app/api/v1/filtered-vehicle-batteries/${category}/${technology}`;
    const res = await axios.get(VEHICLE_MAKES_API_URL);
    setVehicleMakes(res.data);
    console.log(res.data);
  };

  // Fetching Models according to brands
  const fetchModels = async (brand) => {
    setBrand(brand);
    const MODELS_API_URL = `https://rahimafrooz-battery-backend.vercel.app/api/v1/filtered-vehicle-batteries/${category}/${technology}/${brand}`;
    const res = await axios.get(MODELS_API_URL);
    setVehicleModels(res.data);
    console.log(res.data);
  };

  // Fetching Make Years
  const fetchMakeYears = async (model) => {
    setModel(model);
    const MAKE_YEARS_API_URL = `https://rahimafrooz-battery-backend.vercel.app/api/v1/filtered-vehicle-batteries/${category}/${technology}/${brand}/${model}`;
    const res = await axios.get(MAKE_YEARS_API_URL);
    setMakeYears(res.data);
    console.log(res.data);
  };

  // Fetching Batteries
  const fetchBatteries = async(makeYear) =>{
    const BATTERY_SHORT_CODES_API_URL = `https://rahimafrooz-battery-backend.vercel.app/api/v1/filtered-vehicle-batteries/${category}/${technology}/${brand}/${model}/${makeYear}`
    const res = await axios.get(BATTERY_SHORT_CODES_API_URL);
    console.log(res.data);
  }

  return (
    <div className="bg-[#005bab] p-6 rounded-xl border border-background my-10 max-w-screen-2xl mx-10 lg:mx-auto ">
      <div className="bg-background mx-2 py-6 rounded-md">
        <form action="" className="grid grid-cols-1 lg:grid-cols-6 gap-4 mx-5">
          {/* Category Select */}
          <select
            name="category"
            id="cars"
            className="select select-bordered bg-secondary text-white font-semibold px-3 py-2 rounded-md"
            defaultValue={"Hybrid"}
            onChange={(e) => {
              fetchTechnologies(e.target.value);
            }}
          >
            {categories.length === 0 || categories === undefined ? (
              <option>Category</option>
            ) : (
              categories?.map((category) => (
                <option
                  key={category?.category_id}
                  value={category?.category_id}
                >
                  {category?.category_name}
                </option>
              ))
            )}
          </select>

          {/* Hybrid/Non-hybrid Select */}
          <select
            name="technology"
            id="cars"
            className="select select-bordered bg-secondary text-white font-semibold px-3 py-2 rounded-md"
            onChange={(e) => {
              fetchBrands(e.target.value);
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

          {/* Brand Select */}
          <select
            name="brand"
            id="cars"
            className="select select-bordered bg-secondary text-white font-semibold px-3 py-2 rounded-md"
            onChange={(e) => {
              fetchModels(e.target.value);
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

          {/* Model Select */}
          <select
            name="model"
            id="cars"
            className="select select-bordered bg-secondary text-white font-semibold px-3 py-2 rounded-md"
            onChange={(e) => fetchMakeYears(e.target.value)}
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

          {/* Select Year */}
          <select
            name="year"
            id="cars"
            className="select select-bordered bg-secondary text-white font-semibold px-3 py-2 rounded-md"
            onChange={(e)=> fetchBatteries(e.target.value)}
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

          <button className="flex items-center justify-center bg-button2 text-primary font-semibold px-3 py-2 rounded-md border border-primary">
            <p className="mx-2">Find Battery</p>
            <IoSearchSharp />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductSearchField;
