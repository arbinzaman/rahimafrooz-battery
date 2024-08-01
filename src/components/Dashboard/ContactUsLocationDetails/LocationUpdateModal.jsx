import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdEditLocationAlt } from "react-icons/md";

const LocationUpdateModal = ({ updateModalProps }) => {
  const { selectedId, allLocationDetails, setIsLoading, refetch } =
    updateModalProps;
  const { register, handleSubmit } = useForm();

  const singleLocationDetails = allLocationDetails?.find(
    (details) => details.id === selectedId
  );
  // console.log(singleLocationDetails);

  const handleUpdate = async (data) => {
    try {
      setIsLoading(true);

      const formdata = new FormData();
      formdata.append("location_title", data.location_title);
      formdata.append("location_name", data.location_name);
      formdata.append("location", data.location);
      formdata.append("phone_numbers", data.phone_numbers);
      formdata.append("email", data.email);
      console.log(data);
      const res = await axios.put(
        `${
          import.meta.env.VITE_BASE_URL
        }/manufacturing-locations/${selectedId}`,
        formdata
      );
      if (res.status === 200) {
        toast.success("Record updated successfully");
        refetch();
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Something error occurred!");
    }
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white text-black ">
          <label className="text-primary text-medium font-bold flex">
            Update Location <MdEditLocationAlt className="0.5" />
          </label>
          <form method="dialog" onSubmit={handleSubmit(handleUpdate)}>
            <div className="my-2">
              <label>
                Enter title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                defaultValue={
                  singleLocationDetails !== null
                    ? singleLocationDetails?.location_title
                    : ""
                }
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
                defaultValue={
                  singleLocationDetails !== null
                    ? singleLocationDetails?.location_name
                    : ""
                }
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
                defaultValue={
                  singleLocationDetails !== null
                    ? singleLocationDetails?.location
                    : ""
                }
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
                defaultValue={
                  singleLocationDetails !== null
                    ? singleLocationDetails?.phone_numbers
                    : ""
                }
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
                defaultValue={
                  singleLocationDetails !== null
                    ? singleLocationDetails?.email
                    : ""
                }
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

export default LocationUpdateModal;
