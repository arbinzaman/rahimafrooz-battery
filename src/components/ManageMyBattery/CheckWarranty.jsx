import { useForm } from "react-hook-form";
import WarrantyStatus from "./WarrantyStatus";
import {
  errorPopup,
} from "../../utils/Toasts/WarrantyRelated/warrantyToasts";
import { useState } from "react";

const CheckWarranty = () => {
  const { register, handleSubmit } = useForm();
  const [isVerified, setIsVerified] = useState();

  const warrantyInformation = JSON.parse(
    localStorage.getItem("warrantyInformation")
  );

  const handleGetStatus = (data) => {
    console.log(data);
    try {
      if (data?.serialNumber == "") {
        errorPopup();
        return;
      }

      if (
        data?.serialNumber === warrantyInformation?.serialNumber &&
        data?.phoneNumber === warrantyInformation?.phoneNumber
      ) {
        setIsVerified(true);
        console.log(warrantyInformation);
      } else {
        errorPopup("No records found. Please try again!")
        setIsVerified(false);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section>
      <form
        action=""
        onSubmit={handleSubmit(handleGetStatus)}
        className="my-5 max-w-screen-2xl mx-10 lg:mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          <div className="col-span-2">
            <input
              type="text"
              placeholder="Phone Number*"
              className="bg-base border border-border_primary rounded-md p-1 w-full"
              {...register("phoneNumber")}
            />
          </div>

          <div className="col-span-2">
            <input
              type="number"
              placeholder="Serial Number*"
              className="bg-base border border-border_primary rounded-md p-1 w-full"
              {...register("serialNumber")}
            />
          </div>
          <div className="lg:flex justify-end">
            <button className="bg-button px-8 py-1 text-2xl text-base font-bold rounded-md lg:w-full">
              Search
            </button>
          </div>
        </div>
      </form>
      {isVerified && (
        <WarrantyStatus warrantyInformation={warrantyInformation} />
      ) }
    </section>
  );
};

export default CheckWarranty;
