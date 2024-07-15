import { useNavigate } from "react-router-dom";
import Product2 from "../../assets/images/BatteryFinalPage/Product-02.png";
import { fetchBatteries } from "../../utils/BatterySearchPage/TableFetches";
import { useEffect, useState } from "react";
import { RotatingSquare } from "react-loader-spinner";

const Table = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [batteries, setBatteries] = useState(null);
  
  const batteryShortCodes = window.localStorage.getItem("short_codes")
    ? JSON.parse(window.localStorage.getItem("short_codes"))
    : [];

  const carInfo = window.localStorage.getItem("query_datas")
    ? JSON.parse(window.localStorage.getItem("query_datas"))
    : "";

  useEffect(() => {
    setIsLoading(true);
    fetchBatteries(batteryShortCodes)
      .then((newBatteries) => {
        setBatteries(newBatteries);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error:", error);
      });
  }, []);

  const navigate = useNavigate();
  return (
    <section className="bg-[#e6f2ff] p-3 md:p-10 lg:p-14">
      {isLoading ? (
        <div className="flex justify-center my-20">
          <RotatingSquare
            visible={true}
            height="100"
            width="100"
            color="#0d72b9"
            ariaLabel="rotating-square-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : batteries ? (
        <div className="overflow-x-auto">
          <h1 className="text-primary text-sm md:text-semi_large font-semibold md:font-bold py-3">
            Suitable Battery for {carInfo.brand} {carInfo.model} {carInfo.year}{" "}
            ({carInfo.technology})
          </h1>

          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-primary">
                <th className="text-sm md:text-regular lg:text-semi_large text-wrap grid gap-5"></th>

                {batteries?.map((battery) => (
                  <th key={battery.id} className="">
                    <div className="grid justify-items-center gap-3 my-6">
                      <img
                        src={battery?.imgurls[0] || Product2}
                        alt={battery?.battery_name}
                        className="h-24 md:h-48 lg:h-52"
                      />
                      <p className="text-black text-sm md:text-regular">
                        {battery?.battery_name}
                      </p>
                      <button
                        onClick={() =>
                          navigate(`/product-final-page/${battery?.short_code}`)
                        }
                        className="px-6 border border-button  text-xxsmall text-button"
                      >
                        VIEW DETAILS
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-xs ">
              {/* Battery Name */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base">
                  Battery Name
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery.battery_name}
                  </td>
                ))}
              </tr>
              {/* Series Name */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base">
                  Series
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery.series}
                  </td>
                ))}
              </tr>
              {/* Item Code */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base">
                  Item Code
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery.item_code}
                  </td>
                ))}
              </tr>
              {/* Model */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base">
                  Model
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery.model}
                  </td>
                ))}
              </tr>
              {/* Product Dimensions */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base">
                  Product Dimensions
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery.product_dimensions_lxbxh_mm}
                  </td>
                ))}
              </tr>
              {/* Voltage */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base">
                  Voltage
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery.voltage}
                  </td>
                ))}
              </tr>
              {/* Ref. Amphere Hour */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base">
                  Ref. Ampere Hour
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery.ref_amperehour_ah}
                  </td>
                ))}
              </tr>
              {/* Cold Cranking Ability */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base">
                  Cold Cranking Ability
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery.cold_cranking_ability_cca}
                  </td>
                ))}
              </tr>
              {/* Total Warranty */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base">
                  Total Warranty
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery.total_warranty}
                  </td>
                ))}
              </tr>
              {/* Free Warranty */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base">
                  Free Warranty
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery.free_warranty}
                  </td>
                ))}
              </tr>
              {/* Pro-rata Warranty */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base">
                  Pro-rata Warranty
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery.pro_rata_warranty}
                  </td>
                ))}
              </tr>
              {/* Terminal Layout */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base">
                  Terminal Layout
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery.id}
                    className={"text-center text-black border border-primary"}
                  >
                    <img
                      className="mx-auto"
                      src={battery.terminal_layout}
                      width={"100px"}
                      alt=""
                    />
                  </td>
                ))}
              </tr>
              {/* Country of Origin*/}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base">
                  Country of Origin
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery.country_of_origin}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-primary text-center text-sm md:text-semi_large font-semibold md:font-bold py-3">
          Something inconvenient occurred! Please Try Again.
        </h1>
      )}
    </section>
  );
};
// ""
export default Table;
