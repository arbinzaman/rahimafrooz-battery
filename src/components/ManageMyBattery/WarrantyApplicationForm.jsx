import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ThreeDotLoader from "../shared/Loaders/ThreeDotLoader";
import { useState } from "react";

const WarrantyApplicationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const API_URL = `${import.meta.env.VITE_BASE_URL}/warranty-services`;

  const handleApplicationSubmit = async (data) => {
    try {
      setIsLoading(true);
      data.approval_status = false;
      const res = await axios.post(API_URL, data);

      if (res.status === 201) {
        reset();
        toast.success("Application submitted successfully");
      }
    } catch (error) {
      toast.error("Application failed. Please try again!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit(handleApplicationSubmit)}
      className="my-5 mx-auto max-w-screen-sm md:max-w-screen-md lg:w-full xl:max-w-screen-xl 2xl:max-w-screen-2xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <input
            type="text"
            required
            placeholder="Name *"
            className="bg-base border border-border_primary rounded-md p-1 w-full"
            {...register("name")}
          />
        </div>

        <div>
          <input
            type="text"
            required
            placeholder="Phone Number *"
            className="bg-base border border-border_primary rounded-md p-1 w-full"
            {...register("phone_number")}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            className="bg-base border border-border_primary rounded-md p-1 w-full"
            {...register("email")}
          />
        </div>

        <div>
          <input
            type="text"
            required
            placeholder="Product Short Code *"
            className="bg-base border border-border_primary rounded-md p-1 w-full"
            {...register("short_code")}
          />
        </div>

        <div>
          <input
            type="text"
            required
            placeholder="Vehicle/Battery Type"
            className="bg-base border border-border_primary rounded-md p-1 w-full"
            {...register("vehicle_type")}
          />
        </div>

        <div>
          <input
            type="date"
            required
            placeholder="Purchase Date *"
            className="bg-base border border-border_primary rounded-md p-1 w-full"
            {...register("purchase_date")}
          />
        </div>

        <div>
          <input
            type="text"
            required
            placeholder="Purchase DLR*"
            className="bg-base border border-border_primary rounded-md p-1 w-full"
            {...register("purchase_dlr")}
          />
        </div>
      </div>
      {isLoading ? (
        <ThreeDotLoader />
      ) : (
        <button className="bg-button px-8 py-1 my-4 text-2xl text-base font-bold rounded-md">
          Submit
        </button>
      )}
    </form>
  );
};

export default WarrantyApplicationForm;
