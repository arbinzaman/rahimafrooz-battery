import { useForm } from "react-hook-form";
import { FaAward } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import ThreeDotLoader from "../../../shared/Loaders/ThreeDotLoader";
import { useState } from "react";
import Cookies from "js-cookie";

const AddSpecialAwardAndAchievement = ({ props }) => {
  const { refetch } = props;
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = async (data) => {
    try {
      setIsLoading(true);
      const formdata = new FormData();
      formdata.append("description", data.description);
      formdata.append("img_url", data.img_url[0]);
      console.log(data.img_url[0])
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/achievements`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );
      console.log(res);
      if (res.status === 201) {
        reset();
        document.getElementById("my_modal_2").close();
        refetch();
        toast.success("Achievement added successfully");
      }
    } catch (error) {
      console.log(error)
      // toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white text-black ">
          <form method="dialog" className="flex justify-between items-center">
            <h3 className="font-bold text-lg flex text-primary">
              Add new Achievement <FaAward className="mt-1.5 ml-1" />
            </h3>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <form
            method="dialog"
            className="bg-white text-black"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <div className="my-2">
              <label className="block text-sm font-medium mb-2 pl-1">
                Description <span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                required
                className="input input-bordered intput-sm w-full h-20 py-1 bg-white text-black"
                {...register("description")}
              />
            </div>
            <div className="my-2">
              <label className="block text-sm font-medium mb-2 pl-1">
                Award Image <span className="text-red-600">*</span>
              </label>
              <input
                type="file"
                required
                accept="image/png, image/jpg, image/jpeg"
                className="file-input file-input-bordered file-input-sm w-full  bg-white dark:bg-white text-black"
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

export default AddSpecialAwardAndAchievement;
