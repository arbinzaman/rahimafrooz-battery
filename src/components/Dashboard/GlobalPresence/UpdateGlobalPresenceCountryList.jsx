// import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";
import { AiOutlineGlobal } from "react-icons/ai";

const UpdateGlobalPresenceCountryList = ({ updateModalProps }) => {
  const { selectedId, countryList,
    //  refetch 
    } = updateModalProps;
  const [
    // isLoading,
     setIsLoading] = useState(false);

  const singleCountry = countryList?.find(
    (details) => details.id === selectedId
  );
  const { register, handleSubmit, reset } = useForm({
    defaultValues: singleCountry,
  });

  useEffect(() => {
    if (singleCountry) {
      reset(singleCountry);
    }
  }, [singleCountry, reset]);

  const handleUpdate = async (data) => {
    // try {
      setIsLoading(true);
      console.log(data);
    //   const res = await axios.patch(
    //     `${
    //       import.meta.env.VITE_BASE_URL
    //     }/contact/global-locations/${selectedId}`,
    //     data
    //   );

    //   if (res.status === 200) {
    //     refetch();
    //     document.getElementById("my_modal_2").open = false;
    //     toast.success("Record updated successfully");
    //   }
    //   setIsLoading(false);
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Something error occurred!");
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return (
    <div>
      <dialog id="globalPresenceCountryList" className="modal">
        <div className="modal-box bg-white text-black ">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Update Global Presence Country<AiOutlineGlobal className="mt-0.5" />
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <form method="dialog" onSubmit={handleSubmit(handleUpdate)}>
            <div className="my-2">
              <label>
                Enter Region <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-white border  rounded-md px-2 py-1 w-full"
                {...register("region")}
              />
            </div>

            <div className="my-2">
              <label>
                Country Name <span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                className="bg-white border rounded-md px-2 py-1 w-full"
                {...register("countries")}
              />
            </div>


            <div className="flex justify-end gap-3 items-center mt-3">
              <button
                type=""
                className="flex gap-2 btn btn-sm bg-primary text-white hover:bg-secondary hover:text-white"
              >
                Update
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default UpdateGlobalPresenceCountryList;
