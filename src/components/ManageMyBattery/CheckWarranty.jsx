import { useForm } from "react-hook-form";
import WarrantyStatus from "./WarrantyStatus";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const CheckWarranty = () => {
  const { register, handleSubmit } = useForm();
  const [warrantyInformation, setWarrantyInformation] = useState();

  const handleGetStatus = async (data) => {
    try {
      if (data?.short_code == "") {
        toast.error("Provide Product's Short Code");
      }

      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/warranty-services/status-check/${
          data?.short_code
        }/${data.phone_number}`
      );

      setWarrantyInformation(res?.data[0]);

      if(warrantyInformation?.approval_status === false){
        toast.error('Sorry your warranty application is not approved yet!')
      }
    } catch (error) {
      toast.error(error.response.data)
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
              placeholder="Phone Number *"
              className="bg-base border border-border_primary rounded-md p-1 w-full"
              {...register("phone_number")}
            />
          </div>

          <div className="col-span-2">
            <input
              type="text"
              placeholder="Product Short Code *"
              className="bg-base border border-border_primary rounded-md p-1 w-full"
              {...register("short_code")}
            />
          </div>
          <div className="lg:flex justify-end">
            <button className="bg-button px-8 py-1 text-2xl text-base font-bold rounded-md lg:w-full">
              Search
            </button>
          </div>
        </div>
      </form>
      {warrantyInformation?.approval_status && (
        <WarrantyStatus warrantyInformation={warrantyInformation} />
      )}
    </section>
  );
};

export default CheckWarranty;
