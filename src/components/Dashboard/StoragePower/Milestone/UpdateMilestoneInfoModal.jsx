import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ThreeDotLoader from "../../../shared/Loaders/ThreeDotLoader";
import Cookies from "js-cookie";

const UpdateMilestoneInfoModal = ({ updateModalProps }) => {
  const { selectedId, allMiltestone, refetch } = updateModalProps;
  const [isLoading, setIsLoading] = useState(false);

  const singleMilestoneInfo = allMiltestone.find(
    (details) => details.id === selectedId
  );
  const { register, handleSubmit, reset } = useForm({
    defaultValues: singleMilestoneInfo,
  });

  useEffect(() => {
    if (singleMilestoneInfo) {
      reset(singleMilestoneInfo);
    }
  }, [singleMilestoneInfo, reset]);

  const handleUpdate = async (data) => {
    try {
      setIsLoading(true);
      const formdata = new FormData();
      formdata.append("description", data.description);
      formdata.append("image_url", data.image_url[0]);

      const res = await axios.patch(
        `${
          import.meta.env.VITE_BASE_URL
        }/storage-power/milestone-image/${selectedId}`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 200) {
        document.getElementById("update_milestone_info_modal").open = false;
        refetch();
        toast.success("Record updated successfully");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Something error occurred!");
    }
  };

  return (
    <div>
      <dialog id="update_milestone_info_modal" className="modal">
        <div className="modal-box  bg-white">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Update Milestone Information
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <form method="dialog" onSubmit={handleSubmit(handleUpdate)}>
            <div className="my-2">
              <label>
                Description <span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                className="bg-base border rounded-md h-44 px-2 py-1 w-full"
                {...register("description")}
              />
            </div>

            <div className="my-2">
              {singleMilestoneInfo?.image_url && (
                <div className="flex flex-col items-center justify-center my-1">
                  <p>Current Image</p>
                  <img
                    src={singleMilestoneInfo?.image_url}
                    className="w-96 my-3"
                    alt=""
                  />
                </div>
              )}
              <input
                type="file"
                className="file-input file-input-bordered file-input-sm w-full"
                {...register("image_url")}
              />
            </div>

            <div className="flex justify-end gap-3 items-center mt-3">
              {!isLoading ? (
                <button
                  type=""
                  className="flex gap-2 btn btn-sm bg-secondary text-white hover:bg-primary hover:text-white"
                >
                  Update
                </button>
              ) : (
                <ThreeDotLoader />
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

export default UpdateMilestoneInfoModal;
