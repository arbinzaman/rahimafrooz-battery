import { useNavigate } from "react-router-dom";
import { fetchBatteries } from "../../utils/BatterySearchPage/TableFetches";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

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
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#0d72b9"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : batteries ? (
        <div className="overflow-x-auto">
          <h1 className="text-primary text-sm md:text-semi_large font-semibold md:font-bold py-3">
            Suitable Battery for {carInfo?.brand} {carInfo?.model}{" "}
            {carInfo?.year} ({carInfo?.technology})
          </h1>

          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-primary">
                <th className="text-sm md:text-regular lg:text-semi_large text-wrap grid gap-5"></th>

                {batteries?.map((battery) => (
                  <th key={battery?.id} className="">
                    <div className="grid justify-items-center gap-3 my-6">
                      <img
                        src={battery?.imgurls?.[0] || ""}
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
                <td className="bg-primary text-base border border-primary border-b-base w-[300px]">
                  Battery Name
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery?.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery?.battery_name}
                  </td>
                ))}
              </tr>
              {/* Brand Code */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base w-[300px]">
                  Brand Code
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery?.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery?.brand_code}
                  </td>
                ))}
              </tr>
              {/* New JIS */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base w-[300px]">
                  New JIS
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery?.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery?.new_jis}
                  </td>
                ))}
              </tr>
              {/*Material Code */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base w-[300px]">
                  Material Code
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery?.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery?.material_code}
                  </td>
                ))}
              </tr>
              {/* Product Dimensions */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base w-[300px]">
                  Product Dimensions
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery?.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery?.product_dimensions_lxbxh_mm} mm<sup>3</sup>
                  </td>
                ))}
              </tr>
              {/* Voltage */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base w-[300px]">
                  Voltage
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery?.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery?.voltage}
                  </td>
                ))}
              </tr>
              {/* Capacity */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base w-[300px]">
                  Capacity
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery?.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery?.capacity}
                  </td>
                ))}
              </tr>
              {/* Cold Cranking Ability */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base w-[300px]">
                  Cold Cranking Ability
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery?.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery?.cold_cranking_ability_cca}
                  </td>
                ))}
              </tr>
              {/* Plate */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base w-[300px]">
                  Plate
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery?.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery?.plate}
                  </td>
                ))}
              </tr>
              {/* Short Code */}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base w-[300px]">
                  Short Code
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery?.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery?.short_code}
                  </td>
                ))}
              </tr>
              {/* Country of Origin*/}
              <tr>
                <td className="bg-primary text-base border border-primary border-b-base w-[300px]">
                  Country of Origin
                </td>
                {batteries?.map((battery) => (
                  <td
                    key={battery?.id}
                    className={"text-center text-black border border-primary"}
                  >
                    {battery?.country_of_origin}
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

export default Table;
