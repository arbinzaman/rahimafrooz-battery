import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateManufacturingLocationsModal = ({ updateModalProps }) => {
  const { selectedId, manufacturingDetails, setIsLoading, refetch } =
    updateModalProps;
  const { register, handleSubmit } = useForm();

  const singleManufacturingDetails = manufacturingDetails.find(
    (details) => details.id === selectedId
  );

  const handleUpdate = async (data) => {
    try {
      setIsLoading(true);

      const formdata = new FormData();
      formdata.append("title", data.title);
      formdata.append("location", data.location);
      formdata.append("description", data.description);
      formdata.append("image", data.image[0]);

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
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(handleUpdate)}>
            <div className="my-2">
              <label>
                Enter title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                defaultValue={
                  singleManufacturingDetails !== null
                    ? singleManufacturingDetails?.title
                    : ""
                }
                className="bg-base border  rounded-md p-1 w-full"
                {...register("title")}
              />
            </div>

            <div className="my-2">
              <label>
                Location or Type <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                defaultValue={
                  singleManufacturingDetails !== null
                    ? singleManufacturingDetails?.location
                    : ""
                }
                className="bg-base border  rounded-md p-1 w-full"
                {...register("location")}
              />
            </div>

            <div className="my-2">
              <label>
                Description <span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                defaultValue={
                  singleManufacturingDetails !== null
                    ? singleManufacturingDetails?.description
                    : ""
                }
                className="bg-base border  rounded-md p-1 w-full"
                {...register("description")}
              />
            </div>

            <div className="my-2">
              {singleManufacturingDetails?.imageurl && (
                <div className="flex justify-center">
                  <img
                    src={singleManufacturingDetails?.imageurl}
                    className="w-96 my-3"
                    alt=""
                  />
                </div>
              )}
              <input
                type="file"
                defaultValue={singleManufacturingDetails?.imageurl}
                className="file-input file-input-bordered file-input-sm w-full"
                {...register("image")}
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

export default UpdateManufacturingLocationsModal;
