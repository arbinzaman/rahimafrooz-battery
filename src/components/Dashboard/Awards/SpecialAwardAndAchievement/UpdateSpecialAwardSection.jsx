import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaAward } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import ThreeDotLoader from "../../../shared/Loaders/ThreeDotLoader";
import Cookies from "js-cookie";

const UpdateSpecialAwardSection = ({ props }) => {
  const { selectedId, achievementList, refetch } = props;
  const [isLoading, setIsLoading] = useState(false);

  const achievement = achievementList?.find(
    (details) => details.id === selectedId
  );

  const { register, handleSubmit, reset } = useForm({
    defaultValues: achievement,
  });

  useEffect(() => {
    if (achievement) {
      reset(achievement);
    }
  }, [achievement, reset]);

  const handleFormSubmit = async (data) => {
    try {
      setIsLoading(true);
      const formdata = new FormData();
      formdata.append("description", data.description);
      formdata.append("img_url", data.img_url[0]);

      const res = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/achievements/${selectedId}`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 200) {
        document
          .getElementById("specialAwardAndAchievementUpdateModal")
          .close();
        refetch();
        toast.success("Achievement updated successfully");
      }
    } catch (error) {
      // console.log(error);
      // toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <dialog id="specialAwardAndAchievementUpdateModal" className="modal">
        <div className="modal-box bg-white text-black ">
          <form method="dialog" className="flex justify-between items-center">
            <h3 className="font-bold text-lg flex text-primary">
              Update Achievement <FaAward className="mt-1.5 ml-1" />
            </h3>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <form
            method="dialog"
            className="bg-white text-black"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <div className="my-2">
              <label className="pl-1">
                Description <span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                placeholder="Description"
                className="input input-bordered w-full h-20 bg-white text-black"
                {...register("description")}
              />
            </div>
            <div className="my-2">
              {achievement?.img_url && (
                <div className="flex flex-col items-center justify-center my-1">
                  <p>Current Image</p>
                  <img
                    src={achievement?.img_url}
                    className="w-40 shadow-2xl"
                    alt=""
                  />
                </div>
              )}

              <label>
                Image <span className="text-red-600">*</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-sm w-full bg-white text-black"
                {...register("img_url")}
              />
            </div>

            <div className="modal-action">
              {isLoading ? (
                <ThreeDotLoader />
              ) : (
                <button
                  className="btn  btn-xs btn-ghost bg-primary text-white"
                  onClick={handleFormSubmit}
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

export default UpdateSpecialAwardSection;
