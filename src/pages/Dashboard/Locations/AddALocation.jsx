import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoading } from "../../../contexts/LoadingContext";
import Loader from "../../../components/shared/Loaders/Loader";
import { MdLocationOn } from "react-icons/md";

const AddALocation = () => {
  const { isLoading, setIsLoading } = useLoading();
  const { register, handleSubmit } = useForm();

  // console.log(singleLocationDetails);

  const handleAddData = async (data) => {
    try {
      setIsLoading(true);

      const formdata = new FormData();
      formdata.append("location_title", data.location_title);
      formdata.append("location_name", data.location_name);
      formdata.append("location", data.location);
      formdata.append("phone_numbers", data.phone_numbers);
      formdata.append("email", data.email);
      console.log(data);
      const res = await axios.postd(
        `${import.meta.env.VITE_BASE_URL}/contact/global-locations`,
        formdata
      );
      if (res.status === 200) {
        toast.success("Record updated successfully");

        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Something error occurred!");
    }
  };
  if (isLoading) return <Loader />;

  return (
    <div>
      <dialog id="my_modal_69" className="modal">
        <div className="modal-box bg-white text-black ">
          <form method="dialog" onSubmit={handleSubmit(handleAddData)}>
            <label className="text-primary text-medium font-bold flex">Add A Location <MdLocationOn className="mt-1.5"/></label>
            <div className="my-2">
              <label>
                Enter title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-white border  rounded-md p-1 w-full"
                {...register("location_title")}
              />
            </div>

            <div className="my-2">
              <label>
                Location Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-white border  rounded-md p-1 w-full"
                {...register("location_name")}
              />
            </div>

            <div className="my-2">
              <label>
                Location <span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                className="bg-white border  rounded-md p-1 w-full"
                {...register("location")}
              />
            </div>
            <div className="my-2">
              <label>
                Phone Numbers <span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                className="bg-white border  rounded-md p-1 w-full"
                {...register("phone_numbers")}
              />
            </div>
            <div className="my-2">
              <label>
                Email<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-white border  rounded-md p-1 w-full"
                {...register("email")}
              />
            </div>

            <div className="flex justify-end gap-3 items-center mt-3">
              <button
                type=""
                className="flex gap-2 btn btn-sm bg-sky-500 border-0 text-white hover:bg-primary hover:text-white"
              >
                Add
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

export default AddALocation;
