import { useState } from "react";
import BangladeshPageBanner from "../assets/images/ProductPageImages/Bangladesh-products-banner-1.jpg";
import { IoSearchSharp } from "react-icons/io5";

const ProductSearchPage = () => {
  const [brand, setBrand] = useState("");
  const [technology, setTechnology] = useState("");

  let brands;
  if (technology === "Fuel") {
    brands = <option value="Audi">Audi</option>;
  } else if (technology === "Hybrid") {
    brands = (
      <>
        <option value="BMW">BMW</option>
        <option value="Mercedes">Mercedes</option>
      </>
    );
  } else if (technology === "") {
    brands = <option value="">Brand</option>;
  }

  let models;
  if (brand === "Audi") {
    models = (
      <>
        <option value="">Audi A7</option>
        <option value="">Audi A8L</option>
        <option value="">Audi R8</option>
      </>
    );
  } else if (brand === "Mercedes") {
    models = (
      <>
        <option value="">G-63 Wagon</option>
        <option value="">GLC-300</option>
        <option value="">GLS</option>
      </>
    );
  } else if (brand === "BMW") {
    models = (
      <>
        <option value="">X1 Suv</option>
        <option value="">X2 Coupe SUV</option>
        <option value="">X6 Coupe SUV</option>
      </>
    );
  } else if (brand === "") {
    models = <option value="">Model</option>;
  }
  return (
    <section>
      <div>
        <img
          src={BangladeshPageBanner}
          className="w-full"
          alt="A banner showing Rahimafrooz's Globat Ace in a scenario"
        />
      </div>
      <div className="bg-circuit-texture py-12 bg-primary">
        <div className="bg-[#005bab] mx-10 p-6 rounded-xl border border-background">
          <div className="bg-background mx-2 py-6 rounded-md">
            <form action="" className="lg:flex justify-evenly">
              <select
                name="technology"
                id="cars"
                className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                onChange={(e) => setTechnology(e.target.value)}
              >
                <option value="">Technology</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Fuel">Fuel</option>
              </select>

              <select
                name="brand"
                id="cars"
                className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
                onChange={(e) => setBrand(e.target.value)}
              >
                {brands}
              </select>

              <select
                name="model"
                id="cars"
                className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
              >
                {models}
              </select>

              <select
                name="year"
                id="cars"
                className="bg-secondary text-white font-semibold px-3 py-2 rounded-md"
              >
                <option value="">Year</option>
                <option value="">2010</option>
                <option value="">2005   </option>
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

              <button className="flex items-center bg-button2 text-primary font-semibold px-3 py-2 rounded-md border border-primary">
                <p className="mx-2">Find Battery</p>
                <IoSearchSharp />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSearchPage;
