import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const ProductSearchField = () => {
  const [category, setCategory] = useState("");
  const [technology, setTechnology] = useState("Hybrid");
  const [brand, setBrand] = useState("Brand");
  const [model, setModel] = useState("Model");

  // Fetching Categories
  const CATEGORIES_API_URL = `https://rahimafrooz-battery-backend.vercel.app/api/v1/categories`;
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      // console.log("Fetching data...");
      const res = await fetch(CATEGORIES_API_URL);
      const data = await res.json();
      return data;
    },
    refetchInterval: 60000,
    refetchOnWindowFocus: true,
  });
  // console.log(category)

  // Fetching Technologies
  const TECHNOLOGIES_API_URL = `https://rahimafrooz-battery-backend.vercel.app/api/v1/filtered-vehicle-batteries/${category}`;
  const { data: technologies = [] } = useQuery({
    queryKey: ["technologies"],
    queryFn: async () => {
      // console.log("Fetching data...");
      const res = await fetch(TECHNOLOGIES_API_URL);
      const data = await res.json();
      return data;
    },
    refetchInterval: 600,
    refetchOnWindowFocus: true,
  });

  // Fetching Brands
  const VEHICLE_MAKES_API_URL = `https://rahimafrooz-battery-backend.vercel.app/api/v1/filtered-vehicle-batteries/${category}/${technology}`;
  const { data: vehicleMakes = [] } = useQuery({
    queryKey: ["vehicleMakes"],
    queryFn: async () => {
      // console.log("Fetching data...");
      const res = await fetch(VEHICLE_MAKES_API_URL);
      const data = await res.json();
      return data;
    },
    refetchInterval: 600,
    refetchOnWindowFocus: true,
  });
  // console.log(vehicleMakes);

  // Fetching Models according to brands
  const BRANDS_API_URL = `https://rahimafrooz-battery-backend.vercel.app/api/v1/filtered-vehicle-batteries/${category}/${technology}/${brand}`;
  const { data: vehicleModels = [] } = useQuery({
    queryKey: ["vehicleModels"],
    queryFn: async () => {
      // console.log("Fetching data...");
      const res = await fetch(BRANDS_API_URL);
      const data = await res.json();
      return data;
    },
    refetchInterval: 600,
    refetchOnWindowFocus: true,
  });
  // console.log(vehicleModels);

  // Fetching Make Years
  const MAKE_YEARS_API_URL = `https://rahimafrooz-battery-backend.vercel.app/api/v1/filtered-vehicle-batteries/${category}/${technology}/${brand}/${model}`;
  const { data: makeYears = [] } = useQuery({
    queryKey: ["makeYears"],
    queryFn: async () => {
      // console.log("Fetching data...");
      const res = await fetch(MAKE_YEARS_API_URL);
      const data = await res.json();
      return data;
    },
    refetchInterval: 600,
    refetchOnWindowFocus: true,
  });
  // console.log(makeYears);

  return (
    <div className="bg-[#005bab] p-6 rounded-xl border border-background my-10 max-w-screen-2xl mx-10 lg:mx-auto ">
      <div className="bg-background mx-2 py-6 rounded-md">
        <form action="" className="grid grid-cols-1 lg:grid-cols-6 gap-4 mx-5">
          {/* Category Select */}
          <select
            name="category"
            id="cars"
            className="select select-bordered bg-secondary text-white font-semibold px-3 py-2 rounded-md"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            {categories.length !== 0 || categories !== undefined ? (
              categories?.map((category) => (
                <option
                  key={category?.category_id}
                  value={category?.category_id}
                >
                  {category?.category_name}
                </option>
              ))
            ) : (
              <option>Category</option>
            )}
          </select>

          {/* Hybrid/Non-hybrid Select */}
          <select
            name="technology"
            id="cars"
            className="select select-bordered bg-secondary text-white font-semibold px-3 py-2 rounded-md"
            onChange={(e) => setTechnology(e.target.value)}
            disabled={category == 1 || category == 2 ? false : true}
            defaultValue={"Hybrid"}
          >
            {technologies.length !== 0 || technologies !== undefined ? (
              technologies?.map((tech, i) => (
                <option value={tech.technology} key={i}>
                  {tech.technology}
                </option>
              ))
            ) : (
              <option>Hybrid/Non-Hybrid</option>
            )}
          </select>

          {/* Brand Select */}
          <select
            name="brand"
            id="cars"
            className="select select-bordered bg-secondary text-white font-semibold px-3 py-2 rounded-md"
            onChange={(e) => setBrand(e.target.value)}
            disabled={category == 1 || category == 2 ? false : true}
          >
            {vehicleMakes.length !== 0 || vehicleMakes !== undefined ? (
              vehicleMakes?.map((make, i) => (
                <option key={i} value={make.supported_vehicle_make}>
                  {make.supported_vehicle_make}
                </option>
              ))
            ) : (
              <option>Select Brand</option>
            )}
          </select>

          {/* Model Select */}
          <select
            name="model"
            id="cars"
            className="select select-bordered bg-secondary text-white font-semibold px-3 py-2 rounded-md"
            onChange={(e) => setModel(e.target.value)}
            disabled={category == 1 || category == 2 ? false : true}
          >
            {(vehicleMakes.length !== 0 || vehicleMakes !== undefined) &&
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
            disabled={category == 1 || category == 2 ? false : true}
          >
            {(makeYears.length !== 0 || makeYears !== undefined) ? makeYears.map((year,i) => (
              <option key={i} value={year.year}>
                {year.year}
              </option>
            )):<option>Select Year</option>}
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
