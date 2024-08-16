import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loader from "../../shared/Loaders/Loader";
import Cookies from "js-cookie";
import ThreeDotLoader from "../../shared/Loaders/ThreeDotLoader";

const UpdateManufacturingLocationsModal = ({ updateModalProps }) => {
  const { selectedId, manufacturingDetails, refetch } = updateModalProps;
  const [isLoading, setIsLoading] = useState(false);
  const singleManufacturingDetails = manufacturingDetails.find(
    (details) => details.id === selectedId
  );
  const { register, handleSubmit, reset } = useForm({
    defaultValues: singleManufacturingDetails,
  });

  useEffect(() => {
    if (singleManufacturingDetails) {
      reset(singleManufacturingDetails);
    }
  }, [singleManufacturingDetails, reset]);

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
        formdata,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 200) {
        refetch();
        document.getElementById("my_modal_3").open = false;
        toast.success("Record updated successfully");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Something error occurred!");
    }
  };
  if (isLoading) return <Loader />;

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box  bg-white">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Update Manufacturing Locations
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
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
                className="bg-base border rounded-md px-2 py-1 w-full"
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
                className="bg-base border rounded-md px-2 py-1 w-full"
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
                className="bg-base border rounded-md h-36 px-2 py-1 w-full"
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
                accept="image/png, image/jpg, image/jpeg"
                className="file-input file-input-bordered file-input-sm w-full"
                {...register("image")}
              />
            </div>

            <div className="flex justify-end gap-3 items-center mt-3">
              {isLoading ? (
                <ThreeDotLoader />
              ) : (
                <button
                  type=""
                  className="flex gap-2 btn btn-sm bg-secondary text-white hover:bg-primary hover:text-white"
                >
                  Update
                </button>
              )}
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
