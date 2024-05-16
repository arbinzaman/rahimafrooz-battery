import { TbTruckDelivery } from "react-icons/tb";
import { BsTelephoneOutbound } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import maintaince1 from "../../assets/icons/maintaince1.svg";
import { useState } from "react";
import { LuDot } from "react-icons/lu";
const ProductInformation = () => {
  const [tab, setTab] = useState("DetailsTab");
  return (
    <div>
      <h1 className="text-large text-primary font-bold text-center mb-10">
        Product Information
      </h1>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <section className="">
            <div className="flex gap-4 text-xl text-black">
              <button onClick={() => setTab("DetailsTab")} className={tab==="DetailsTab" ? "border border-b-primary" : ""}>Details</button>
              <button onClick={() => setTab("AdditionalTab")} className={tab==="AdditionalTab" ? "border border-b-primary" : ""}>
                Additional Information
              </button>
            </div>
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8 border-primary border-r border-t">
              {tab === "DetailsTab" ? (
                <div>
                  <h2 className="mb-4 text-3xl text-black font-bold leadi text-left">
                    GLOBATT ACE N50ZL Battery
                  </h2>
                  <div className="divide-y text-smal text-black">
                    <div className="space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                      <h3 className="md:col-span-5">Brand</h3>
                      <p className="md:pl-0 md:col-span-7">GLOBATT</p>
                    </div>
                    <div className="space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                      <h3 className="md:col-span-5">Series</h3>
                      <p className="md:pl-0 md:col-span-7">ACE</p>
                    </div>
                    <div className="space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                      <h3 className="md:col-span-5">Item Code</h3>
                      <p className="md:pl-0 md:col-span-7">ACE N50ZL</p>
                    </div>
                    <div className="space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                      <h3 className="md:col-span-5">Model</h3>
                      <p className="md:pl-0 md:col-span-7">N50ZL</p>
                    </div>
                    <div className="space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                      <h3 className="md:col-span-5">Product Dimensions</h3>
                      <p className="md:pl-0 md:col-span-7"></p>
                    </div>
                    <div className="space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                      <h3 className="md:col-span-5">Voltage (V)</h3>
                      <p className="md:pl-0 md:col-span-7">12</p>
                    </div>
                    <div className="space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                      <h3 className="md:col-span-5">Ref. Amphere Hour (AH)</h3>
                      <p className="md:pl-0 md:col-span-7">100</p>
                    </div>
                    <div className="space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                      <h3 className="md:col-span-5">
                        Cold Cranking Ability (CCA)
                      </h3>
                      <p className="md:pl-0 md:col-span-7">600</p>
                    </div>
                    <div className="space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                      <h3 className="md:col-span-5">Total Warranty (Months)</h3>
                      <p className="md:pl-0 md:col-span-7">24</p>
                    </div>
                    <div className="space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                      <h3 className="md:col-span-5">Country Origin</h3>
                      <p className="md:pl-0 md:col-span-7">Bangladesh</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-regular text-black my-10">
                  <p className="flex gap-3 items-center">
                    <LuDot color="#0d72b9"/>
                    High Cranking Power
                  </p>
                  <p className="flex gap-3 items-center">
                    <LuDot color="#0d72b9"/>
                    Zero-Maintenance
                  </p>
                  <p className="flex gap-3 items-center">
                    <LuDot color="#0d72b9"/>
                    Improved Safety
                  </p>
                  <p className="flex gap-3 items-center">
                    <LuDot color="#0d72b9"/>
                    Long Life
                  </p>
                  <p className="flex gap-3 items-center">
                    <LuDot color="#0d72b9"/>
                    Vibration Resistance
                  </p>
                  <p className="flex gap-3 items-center">
                    <LuDot color="#0d72b9"/>
                    High Reserve Capacity
                  </p>
                  <p className="flex gap-3 items-center">
                    <LuDot color="#0d72b9"/>
                    Heat Tolerance
                  </p>
                </div>
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
            24 Months Warranty
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
