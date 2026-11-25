import { useForm } from "react-hook-form";
import WarrantyStatus from "./WarrantyStatus";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import ThreeDotLoader from "../shared/Loaders/ThreeDotLoader";
import { DEMO_MODE } from "../../demo/config";

const CheckWarranty = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, setValue } = useForm();
  const [warrantyInformation, setWarrantyInformation] = useState();

  const handleGetStatus = async (data) => {
    try {
      if (!data?.short_code?.trim()) {
        toast.error("Provide Product's Short Code");
        return;
      }
      if (!data?.phone_number?.trim()) {
        toast.error("Provide Phone Number");
        return;
      }
      setIsLoading(true);

      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/warranty-services/status-check/${
          data.short_code.trim()
        }/${data.phone_number.trim()}`
      );

      const record = res?.data?.[0];
      setWarrantyInformation(record);

      if (!record) {
        toast.error("No warranty record found!");
      } else if (record.approval_status === false) {
        toast.error("Sorry your warranty application is not approved yet!");
      }
    } catch (error) {
      setWarrantyInformation(undefined);
      toast.error(error?.response?.data || "Warranty check failed!");
    } finally {
      setIsLoading(false);
    }
  };

  const fillSample = () => {
    setValue("phone_number", "01711223344");
    setValue("short_code", "GB-N70Z");
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
            {isLoading ? (
              <ThreeDotLoader />
            ) : (
              <button className="bg-button px-8 py-1 text-2xl text-base font-bold rounded-md lg:w-full">
                Search
              </button>
            )}
          </div>
        </div>
      </form>
      {DEMO_MODE && (
        <div className="max-w-screen-2xl mx-10 lg:mx-auto mb-5 flex flex-wrap items-center gap-3 text-xs text-gray-700 bg-blue-50 border border-blue-200 rounded-md px-3 py-2">
          <span>
            <strong>Demo Sample:</strong> Phone <code className="font-mono">01711223344</code> · Short Code{" "}
            <code className="font-mono">GB-N70Z</code> (Approved)
          </span>
          <button
            type="button"
            onClick={fillSample}
            className="px-2.5 py-1 rounded bg-primary text-white hover:bg-secondary font-medium"
          >
            Fill Sample
          </button>
        </div>
      )}
      {warrantyInformation?.approval_status && (
        <WarrantyStatus warrantyInformation={warrantyInformation} />
      )}
    </section>
  );
};

export default CheckWarranty;
