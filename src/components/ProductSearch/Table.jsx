import { useNavigate } from "react-router-dom";
import Product1 from "../../assets/images/BatteryFinalPage/Product-01.png";
import Product2 from "../../assets/images/BatteryFinalPage/Product-02.png";
const Table = () => {
  const batteries = [
    {
      id: 1,
      name: "Brand",
      series: "Series",
      itemCode: "Item Code",
      model: "Model",
      productDimension: "Product Dimensions (LxBxH) (mm)",
      voltage: "Voltage (V)",
      ah: "Ref. Amphere Hour (AH)",
      cca: "Cold Cranking Ability (CCA)",
      totalWarrantyMo: "Total Warranty (Months)",
      freeWarrantyMo: "Free Warranty (Months)",
      proRataWarrantyMo: "Pro-rata Warranty (Months)",
      terminalLayout: "Terminal Layout",
      originCountry: "Country of Origin",
    },
    {
      id: 2,
      name: "Lucas Ultima Battery",
      series: "PRO",
      itemCode: "AAM-PR-0055B24LS",
      model: "55B24LS",
      productDimension: "238x129x227",
      voltage: 12,
      ah: 45,
      cca: 418,
      totalWarrantyMo: 72,
      freeWarrantyMo: 36,
      proRataWarrantyMo: 36,
      terminalLayout:
        "https://www.odysseybatteries.com/odyssey/images/680_terminals.jpg",
      originCountry: "Bangladesh",
    },
    {
      id: 3,
      name: "Globatt",
      series: "PRO",
      itemCode: "AAM-PR-0055B24LS",
      model: "55B24LS",
      productDimension: "238x129x227",
      voltage: 12,
      ah: 45,
      cca: 418,
      totalWarrantyMo: 72,
      freeWarrantyMo: 36,
      proRataWarrantyMo: 36,
      terminalLayout:
        "https://www.odysseybatteries.com/odyssey/images/680_terminals.jpg",
      originCountry: "Bangladesh",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-primary">
            <th className="text-sm md:text-regular lg:text-semi_large text-wrap grid gap-5">
              <p>Suitable Batteries For </p>
              <p>AUDI A3 (Diesel)</p>
            </th>
            <th className="">
              <div className="grid justify-items-center gap-3">
                <img
                  src={Product2}
                  alt="Lucas Ultima SMF battery"
                  className="h-24 md:h-48 lg:h-52"
                />
                <p className="text-black text-sm md:text-regular lg:text-medium">Lucas Ultima Battery</p>
                <button onClick={()=>navigate("/product-final-page")} className="px-6 border border-button  text-xxsmall text-button">
                  VIEW DETAILS
                </button>
              </div>
            </th>
            <th className="">
              <div className="grid  justify-items-center gap-3">
                <img
                  src={Product1}
                  alt="Globatt ACE battery"
                  className="h-24 md:h-48 lg:h-52"
                />
                <p className="text-black text-sm md:text-regular lg:text-medium">Globatt</p>
                <button onClick={()=>navigate("/product-final-page")} className="px-6 border border-button  text-xxsmall text-button">
                  VIEW DETAILS
                </button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="text-xs md:sm lg:medium">
          {/* Brand Name */}
          <tr>
            {batteries.map((battery) => (
              <td
                key={battery.id}
                className={
                  battery.id == 1
                    ? "bg-primary text-base border border-primary border-b-base"
                    : "text-center text-black border border-primary"
                }
              >
                {battery.name}
              </td>
            ))}
          </tr>
          {/* Series Name */}
          <tr>
            {batteries.map((battery) => (
              <td
                key={battery.id}
                className={
                  battery.id == 1
                    ? "bg-primary text-base border border-primary border-b-base"
                    : "text-center text-black border border-primary"
                }
              >
                {battery.series}
              </td>
            ))}
          </tr>
          {/* Item Code */}
          <tr>
            {batteries.map((battery) => (
              <td
                key={battery.id}
                className={
                  battery.id == 1
                    ? "bg-primary text-base border border-primary border-b-base"
                    : "text-center text-black border border-primary"
                }
              >
                {battery.itemCode}
              </td>
            ))}
          </tr>
          {/* Model */}
          <tr>
            {batteries.map((battery) => (
              <td
                key={battery.id}
                className={
                  battery.id == 1
                    ? "bg-primary text-base border border-primary border-b-base"
                    : "text-center text-black border border-primary"
                }
              >
                {battery.model}
              </td>
            ))}
          </tr>
          {/* Product Dimensions */}
          <tr>
            {batteries.map((battery) => (
              <td
                key={battery.id}
                className={
                  battery.id == 1
                    ? "bg-primary text-base border border-primary border-b-base"
                    : "text-center text-black border border-primary"
                }
              >
                {battery.productDimension}
              </td>
            ))}
          </tr>
          {/* Voltage */}
          <tr>
            {batteries.map((battery) => (
              <td
                key={battery.id}
                className={
                  battery.id == 1
                    ? "bg-primary text-base border border-primary border-b-base"
                    : "text-center text-black border border-primary"
                }
              >
                {battery.voltage}
              </td>
            ))}
          </tr>
          {/* Ref. Amphere Hour */}
          <tr>
            {batteries.map((battery) => (
              <td
                key={battery.id}
                className={
                  battery.id == 1
                    ? "bg-primary text-base border border-primary border-b-base"
                    : "text-center text-black border border-primary"
                }
              >
                {battery.ah}
              </td>
            ))}
          </tr>
          {/* Cold Cranking Ability */}
          <tr>
            {batteries.map((battery) => (
              <td
                key={battery.id}
                className={
                  battery.id == 1
                    ? "bg-primary text-base border border-primary border-b-base"
                    : "text-center text-black border border-primary"
                }
              >
                {battery.cca}
              </td>
            ))}
          </tr>
          {/* Total Warranty */}
          <tr>
            {batteries.map((battery) => (
              <td
                key={battery.id}
                className={
                  battery.id == 1
                    ? "bg-primary text-base border border-primary border-b-base"
                    : "text-center text-black border border-primary"
                }
              >
                {battery.totalWarrantyMo}
              </td>
            ))}
          </tr>
          {/* Free Warranty */}
          <tr>
            {batteries.map((battery) => (
              <td
                key={battery.id}
                className={
                  battery.id == 1
                    ? "bg-primary text-base border border-primary border-b-base"
                    : "text-center text-black border border-primary"
                }
              >
                {battery.freeWarrantyMo}
              </td>
            ))}
          </tr>
          {/* Pro-rata Warranty */}
          <tr>
            {batteries.map((battery) => (
              <td
                key={battery.id}
                className={
                  battery.id == 1
                    ? "bg-primary text-base border border-primary border-b-base"
                    : "text-center text-black border border-primary"
                }
              >
                {battery.proRataWarrantyMo}
              </td>
            ))}
          </tr>
          {/* Terminal Layout */}
          <tr>
            {batteries.map((battery) => (
              <td
                key={battery.id}
                className={
                  battery.id == 1
                    ? "bg-primary text-base border border-primary border-b-base"
                    : "text-center text-black border border-primary"
                }
              >
                {battery.id==1?"Terminal Layout":<img className="mx-auto" src={battery.terminalLayout} width={"100px"} alt="" />}
              </td>
            ))}
          </tr>
          {/* Country of Origin*/}
          <tr>
            {batteries.map((battery) => (
              <td
                key={battery.id}
                className={
                  battery.id == 1
                    ? "bg-primary text-base border border-primary border-b-base"
                    : "text-center text-black border border-primary"
                }
              >
                {battery.originCountry}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
// ""
export default Table;
