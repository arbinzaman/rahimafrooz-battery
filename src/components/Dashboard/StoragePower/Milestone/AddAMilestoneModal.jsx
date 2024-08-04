import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { VscMilestone } from "react-icons/vsc";
import ThreeDotLoader from "../../../shared/Loaders/ThreeDotLoader";

const AddAMilestoneModal = ({ props }) => {
  const { refetch } = props;
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = async (data) => {
    try {
      setIsLoading(true);
      const formdata = new FormData();
      formdata.append("description", data.description);
      formdata.append("image_url", data.image_url[0]);

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/storage-power/milestone-image/`,
        formdata
      );

      if (res.status === 201) {
        reset();
        document.getElementById("milestone").open = false;
        refetch();
        setIsLoading(false);
        toast.success("New record has been added.");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
      toast.error("Something error occurred!");
    }
  };

  return (
    <div>
      <dialog id="milestone" className="modal">
        <div className="modal-box bg-white text-black">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Add Milestone Image & Text <VscMilestone className="mt-1 ml-2" />
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>

          <div className="">
            <form
              method="dialog"
              onSubmit={handleSubmit(handleFormSubmit)}
              className=""
            >
              <div className="my-2">
                <label>
                  Description <span className="text-red-600">*</span>
                </label>
                <textarea
                  type="text"
                  required
                  className="border  rounded-md p-1 w-full bg-white text-black border-black "
                  {...register("description")}
                />
              </div>

              <div className="my-2">
                <input
                  type="file"
                  required
                  className="file-input file-input-bordered file-input-sm w-full bg-white"
                  {...register("image_url")}
                />
              </div>

              <div className="flex justify-end gap-3 items-center mt-3">
                {!isLoading ? (
                  <button
                    type=""
                    className="flex gap-2 btn btn-sm bg-sky-500 border-0 text-white hover:bg-primary hover:text-white"
                  >
                    Add
                  </button>
                ) : (
                  <ThreeDotLoader />
                )}
              </div>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AddAMilestoneModal;
