import { useForm } from "react-hook-form";
import {
  errorPopup,
  successPopup,
} from "../../utils/Toasts/WarrantyRelated/warrantyToasts";

const WarrantyApplicationForm = () => {
  const { register, handleSubmit } = useForm();

  const handleApplicationSubmit = (data) => {
    try {
      if (data?.serialNumber == "") {
        errorPopup("Something went wrong, Please try again!");
        return;
      }
      data.remainingDays = "59 days (1 Year Warrienty)";
      console.log(data);
      localStorage.setItem("warrantyInformation", JSON.stringify(data));
      successPopup("Application Submitted.");
    } catch (error) {
      console.log(error.message);
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
            placeholder="Name*"
            className="bg-base border border-border_primary rounded-md p-1 w-full"
            {...register("name")}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Phone Number*"
            className="bg-base border border-border_primary rounded-md p-1 w-full"
            {...register("phoneNumber")}
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Email*"
            className="bg-base border border-border_primary rounded-md p-1 w-full"
            {...register("email")}
          />
        </div>

        <div>
          <input
            type="number"
            placeholder="Product Serial Number*"
            className="bg-base border border-border_primary rounded-md p-1 w-full"
            {...register("serialNumber")}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Vehicle/Device/Application"
            className="bg-base border border-border_primary rounded-md p-1 w-full"
            {...register("vehicleType")}
          />
        </div>

        <div>
          <input
            type="date"
            placeholder="Purchase Date*"
            className="bg-base border border-border_primary rounded-md p-1 w-full"
            {...register("purchaseDate")}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Purchase DLR*"
            className="bg-base border border-border_primary rounded-md p-1 w-full"
            {...register("purchaseDLR")}
          />
        </div>
      </div>
      <button className="bg-button px-8 py-1 my-4 text-2xl text-base font-bold rounded-md">
        Submit
      </button>
    </form>
  );
};

export default WarrantyApplicationForm;
