import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loader from "../../shared/Loaders/Loader";
import Cookies from "js-cookie";
import ThreeDotLoader from "../../shared/Loaders/ThreeDotLoader";

const AddABoardMembers = ({ refetch }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleAdd = async (data) => {
    try {
      setIsLoading(true);
      const formdata = new FormData();
      formdata.append("name", data.name);
      formdata.append("designation", data.designation);
      formdata.append("description", data.description);
      formdata.append("image_url", data.image_url[0]);
      formdata.append("facebook", data.facebook);
      formdata.append("instagram", data.instagram);
      formdata.append("linkedin", data.linkedin);

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/manufacturing-locations`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 201) {
        refetch();
        document.getElementById("addBoardMembers").open = false;
        toast.success("Board member added successfully");
      }
      setIsLoading(false);
      reset();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Something error occurred!");
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div>
      <dialog id="addBoardMembers" className="modal">
        <div className="modal-box bg-white">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Add Board Members Details
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <form
            method="dialog"
            className="text-black"
            onSubmit={handleSubmit(handleAdd)}
          >
            <div className="my-2">
              <label>
                Enter name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-base border rounded-md px-2 py-1 w-full"
                {...register("name", { required: true })}
              />
            </div>

            <div className="my-2">
              <label>
                Designation <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-base border rounded-md px-2 py-1 w-full"
                {...register("designation", { required: true })}
              />
            </div>

            <div className="my-2">
              <label>
                Description <span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                className="bg-base border rounded-md h-36 px-2 py-1 w-full"
                {...register("description", { required: true })}
              />
            </div>

            <div className="my-2 ">
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                className="file-input bg-white file-input-bordered file-input-sm w-full"
                {...register("image_url", { required: true })}
              />
            </div>

            <div className="my-2">
              <label>
                Facebook URL <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-base border rounded-md px-2 py-1 w-full"
                {...register("facebook", { required: true })}
              />
            </div>

            <div className="my-2">
              <label>
                Instagram URL <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-base border rounded-md px-2 py-1 w-full"
                {...register("instagram", { required: true })}
              />
            </div>

            <div className="my-2">
              <label>
                LinkedIn URL <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-base border rounded-md px-2 py-1 w-full"
                {...register("linkedin", { required: true })}
              />
            </div>

            <div className="flex justify-end gap-3 items-center mt-3">
              {isLoading ? (
                <ThreeDotLoader />
              ) : (
                <button
                  type="submit"
                  className="flex gap-2 btn btn-sm bg-secondary text-white hover:bg-primary hover:text-white"
                >
                  Add
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

export default AddABoardMembers;
