import { TbTruckDelivery } from "react-icons/tb";
import { BsTelephoneOutbound } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import maintaince1 from "../../assets/icons/maintaince1.svg";
import { useState } from "react";
import AdditionalInformation from "./AdditionalInformation";
import ProductDetailsSection   from "./ProductDetailsSection";
const ProductInformation = ({battery}) => {
  const [tab, setTab] = useState("DetailsTab");
  return (
    <div>
      <h1 className="text-large text-primary font-bold text-center mb-10">
        Product Information
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <section className="">
            <div className="flex gap-4 text-xl text-black">
              <button
                onClick={() => setTab("DetailsTab")}
                className={
                  tab === "DetailsTab" ? "border border-b-primary" : ""
                }
              >
                Details
              </button>
              <button
                onClick={() => setTab("AdditionalTab")}
                className={
                  tab === "AdditionalTab" ? "border border-b-primary" : ""
                }
              >
                Additional Information
              </button>
            </div>
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8 border-primary border-r border-t">
              {tab === "DetailsTab" ? (
                <div>
                  <h2 className="mb-4 text-medium lg:text-semi_large text-black font-bold leadi text-left">
                    {battery.battery_name}
                  </h2>
                  <ProductDetailsSection battery={battery}/> 
                </div>
              ) : (
                <AdditionalInformation/>
              )}
            </div>
          </section>
        </div>
        <div
          className=" border-primary border-l border-t mt-7 text-xl text-black"
          id="demo"
        >
          <p className="mt-20  ml-5 flex gap-4 ">
            <img
              src={maintaince1}
              alt=""
              width={30}
              height={30}
              className="bg-primary p-1 rounded"
            />
            Zero-Maintenance
          </p>
          <p className="mt-5 ml-5 flex gap-4">
            {" "}
            <TbTruckDelivery className="bg-primary text-white text-3xl p-1 rounded" />
            Free shipping on most items
          </p>
          <p className="mt-5 ml-5 flex gap-4">
            <BsTelephoneOutbound className="bg-primary text-white text-3xl p-1 rounded" />{" "}
            Call us now for more info about our products
          </p>
          <p className="mt-5 ml-5 flex gap-4">
            {" "}
            <SlCalender className="bg-primary text-white text-3xl p-1 rounded" />
            {battery.total_warranty} Months Warranty
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
