import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ProductSearchField = () => {
  const [categoryName, setCategoryName] = useState("");
  const [category, setCategory] = useState("");

  const [technologies, setTechnologies] = useState([]);
  const [technology, setTechnology] = useState("");

  const [vehicleMakes, setVehicleMakes] = useState([]);
  const [brand, setBrand] = useState("");

  const [vehicleModels, setVehicleModels] = useState([]);
  const [model, setModel] = useState("");

  const [makeYears, setMakeYears] = useState([]);
  const [shortCodes, setShortCodes] = useState(null);

  const [queryDatas, setQueryDatas] = useState({
    technology: "",
    brand: "",
    model: "",
    year: "",
    category: "",
  });

  const navigate = useNavigate();

  // Fetching Categories
  const CATEGORIES_API_URL = `${import.meta.env.VITE_BASE_URL}/categories`;
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(CATEGORIES_API_URL);
      const data = await res.json();
      return data;
    },
  });

  // Fetching Technologies
  const fetchTechnologies = async (category_id, category_name) => {
    setCategory(category_id);
    setCategoryName(category_name);
    const TECHNOLOGIES_API_URL = `${
      import.meta.env.VITE_BASE_URL
    }/filtered-vehicle-batteries/${category_id}`;
    const res = await axios.get(TECHNOLOGIES_API_URL);
    setTechnologies(res.data);
  };

  // Fetching Brands
  const fetchBrands = async (technology) => {
    setTechnology(technology);
    const VEHICLE_MAKES_API_URL = `${
      import.meta.env.VITE_BASE_URL
    }/filtered-vehicle-batteries/${category}/${technology}`;
    const res = await axios.get(VEHICLE_MAKES_API_URL);
    setVehicleMakes(res.data);
  };

  // Fetching Models according to brands
  const fetchModels = async (brand) => {
    setBrand(brand);
    const MODELS_API_URL = `${
      import.meta.env.VITE_BASE_URL
    }/filtered-vehicle-batteries/${category}/${technology}/${brand}`;
    const res = await axios.get(MODELS_API_URL);
    setVehicleModels(res.data);
  };

  // Fetching Make Years
  const fetchMakeYears = async (model) => {
    setModel(model);
    const MAKE_YEARS_API_URL = `${
      import.meta.env.VITE_BASE_URL
    }/filtered-vehicle-batteries/${category}/${technology}/${brand}/${model}`;
    const res = await axios.get(MAKE_YEARS_API_URL);
    setMakeYears(res.data);
  };

  // Fetching Batteries
  const fetchBatteries = async (makeYear) => {
    const BATTERY_SHORT_CODES_API_URL = `${
      import.meta.env.VITE_BASE_URL
    }/filtered-vehicle-batteries/${category}/${technology}/${brand}/${model}/${makeYear}`;
    const res = await axios.get(BATTERY_SHORT_CODES_API_URL);
    setShortCodes(res.data);
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

    if (!categoryName) {
      toast.error("Please select a category!");
      return;
    }

    if (
      categoryName === "Passenger Car" ||
      categoryName === "Commercial Vehicle"
    ) {
      navigate("/product-search");
    } else {
      navigate(`/categories/${categoryName}`);
    }
    window.location.reload();
  };
  return (
    <div className="bg-[#005bab] p-2 mt-4 lg:mt-10 rounded-xl max-w-screen-2xl lg:mx-auto">
      <div className="bg-background lg:mx-2 py-3 lg:py-6 rounded-md">
        <form action="" className="grid lg:grid-cols-6 gap-4 mx-5">
          {/* Category Select */}
          <div>
            <select
              name="category"
              id="cars"
              className="select select-sm select-bordered bg-secondary text-white font-semibold px-3 rounded-md w-full"
              defaultValue={"Hybrid"}
              onChange={(e) => {
                fetchTechnologies(
                  e.target.value,
                  e.target.options[e.target.selectedIndex].text
                );
                handleChange(e);
              }}
            >
              <option>Select Category</option>
              {categories?.length > 0 ? (
                categories?.map((category) => (
                  <option
                    key={category?.category_id}
                    value={category?.category_id}
                  >
                    {category?.category_name}
                  </option>
                ))
              ) : (
                <option>Please wait</option>
              )}
            </select>
          </div>

          {/* Hybrid/Non-hybrid Select */}
          <div>
            <select
              name="technology"
              id="cars"
              className="select select-sm select-bordered bg-secondary text-white font-semibold px-3 rounded-md w-full"
              value={queryDatas.technology}
              onChange={(e) => {
                fetchBrands(e.target.value);
                handleChange(e);
              }}
              disabled={category == 1 || category == 2 ? false : true}
              defaultValue={"Hybrid"}
            >
              <option>Hybrid/Non-Hybrid</option>
              {technologies?.length > 0 ? (
                (technologies.length !== 0 || technologies !== undefined) &&
                technologies?.map((tech, i) => (
                  <option value={tech.technology} key={i}>
                    {tech.technology}
                  </option>
                ))
              ) : (
                <option>Please Wait</option>
              )}
            </select>
          </div>

          {/* Brand Select */}
          <div>
            <select
              name="brand"
              id="cars"
              className="select select-sm select-bordered bg-secondary text-white font-semibold px-3 rounded-md w-full"
              value={queryDatas.brand}
              onChange={(e) => {
                fetchModels(e.target.value);
                handleChange(e);
              }}
              disabled={category == 1 || category == 2 ? false : true}
            >
              <option>Select Brand</option>
              {vehicleMakes?.length > 0 ? (
                (vehicleMakes.length !== 0 || vehicleMakes !== undefined) &&
                vehicleMakes?.map((make, i) => (
                  <option key={i} value={make.supported_vehicle_make}>
                    {make.supported_vehicle_make}
                  </option>
                ))
              ) : (
                <option>Please Wait</option>
              )}
            </select>
          </div>

          {/* Model Select */}
          <div>
            <select
              name="model"
              id="cars"
              className="select select-sm select-bordered bg-secondary text-white font-semibold px-3 rounded-md w-full"
              value={queryDatas.model}
              onChange={(e) => {
                fetchMakeYears(e.target.value);
                handleChange(e);
              }}
              disabled={category == 1 || category == 2 ? false : true}
            >
              <option>Select Model</option>
              {vehicleMakes?.length > 0 ? (
                (vehicleModels.length !== 0 || vehicleModels !== undefined) &&
                vehicleModels?.map((model, i) => (
                  <option key={i} value={model.model}>
                    {model.model}
                  </option>
                ))
              ) : (
                <option>Please Wait</option>
              )}
            </select>
          </div>

          {/* Select Year */}
          <div>
            <select
              name="year"
              id="cars"
              className="select select-sm select-bordered bg-secondary text-white font-semibold px-3 rounded-md w-full"
              value={queryDatas.year}
              onChange={(e) => {
                fetchBatteries(e.target.value);
                handleChange(e);
              }}
              disabled={category == 1 || category == 2 ? false : true}
            >
              <option>Select Year</option>
              {makeYears?.length > 0 ? (
                (makeYears.length !== 0 || makeYears !== undefined) &&
                makeYears.map((year, i) => (
                  <option key={i} value={year.year}>
                    {year.year}
                  </option>
                ))
              ) : (
                <option>Please Wait</option>
              )}
            </select>
          </div>

          <div>
            <button
              className="w-full flex items-center justify-center bg-button2 text-primary font-semibold px-3 py-[3px] rounded-md border border-primary"
              onClick={handleFindBattery}
              disabled={shortCodes === null ? true : false}
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
