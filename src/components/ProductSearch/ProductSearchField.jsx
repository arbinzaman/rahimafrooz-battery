import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const ProductSearchField = () => {
  const [brand, setBrand] = useState("Brand");
  const [technology, setTechnology] = useState("Technology");
  const [model, setModel] = useState("Model");

  const technologies = [
    { id: 1, value: "Technology" },
    { id: 2, value: "Fuel" },
    { id: 3, value: "Hybrid" },
  ];

  let brands;
  if (technology == "Fuel") {
    brands = [
      { id: 1, value: "Brand" },
      { id: 2, value: "Audi" },
    ];
  } else if (technology == "Hybrid") {
    brands = [
      { id: 1, value: "Brand" },
      { id: 2, value: "BMW" },
      { id: 3, value: "Mercedes" },
    ];
  } else if (technology == "Technology") {
    brands = [{ id: 1, value: "Brand" }];
  }

  let models;
  if (brand == "Audi") {
    models = [
      { id: 1, value: "Model" },
      { id: 2, value: "Audi A3" },
      { id: 3, value: "Audi A7" },
      { id: 4, value: "Audi R8" },
    ];
  } else if (brand == "BMW") {
    models = [
      { id: 1, value: "Model" },
      { id: 2, value: "BMW i4" },
      { id: 3, value: "BMW i6" },
      { id: 4, value: "BMW iX" },
    ];
  } else if (brand == "Mercedes") {
    models = [
      { id: 1, value: "Model" },
      { id: 2, value: "AMG" },
      { id: 3, value: "G-63 Wagon" },
      { id: 4, value: "GLS 300" },
    ];
  } else if (brand == "Brand") {
    models = [{ id: 1, value: "Model" }];
  }

  let years;
  if (model == "Audi A3" || model == "Audi A7" || model == "Audi R8") {
    years = [
      { id: 1, value: "2001" },
      { id: 2, value: "2005" },
      { id: 3, value: "2010" },
    ];
  } else if (model == "BMW i4" || model == "BMW i6" || model == "BMW iX") {
    years = [
      { id: 1, value: "2004" },
      { id: 2, value: "2006" },
      { id: 3, value: "2012" },
    ];
  } else if (model == "AMG" || model == "G-63 Wagon" || model == "GLS 300") {
    years = [
      { id: 1, value: "2008" },
      { id: 2, value: "2011" },
      { id: 3, value: "2016" },
    ];
  } else if (model == "Model") {
    years = [{ id: 1, value: "Year" }];
  }
  return (
    <div className="bg-[#005bab] p-6 rounded-xl border border-background mx-8 my-5 md:mx-16 lg:mx-32 ">
      <div className="bg-background mx-2 py-6 rounded-md">
        <form action="" className="grid grid-cols-1 lg:grid-cols-6 gap-4 mx-5">
          <select
            name="technology"
            id="cars"
            className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
            onChange={(e) => setTechnology(e.target.value)}
          >
            {technologies.map((tech) => (
              <option value={tech.value} key={tech.id}>
                {tech.value}
              </option>
            ))}
          </select>

          <select
            name="brand"
            id="cars"
            className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
            onChange={(e) => setBrand(e.target.value)}
          >
            {brands.map((b) => (
              <option key={b.id} value={b.value}>
                {b.value}
              </option>
            ))}
          </select>

          <select
            name="model"
            id="cars"
            className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
            onChange={(e) => setModel(e.target.value)}
          >
            {models.map((m) => (
              <option key={m.id} value={m.value}>
                {m.value}
              </option>
            ))}
          </select>

          <select
            name="year"
            id="cars"
            className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
          >
            {years.map((y) => (
              <option key={y.id} value={y.value}>
                {y.value}
              </option>
            ))}
          </select>

          <select
            name="cc"
            id="cars"
            className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
          >
            <option value="">CC</option>
            <option value="">3000</option>
            <option value="mercedes">1500</option>
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
