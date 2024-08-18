import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaAward } from "react-icons/fa";
// import axios from "axios";
// import toast from "react-hot-toast";
import ThreeDotLoader from "../../../shared/Loaders/ThreeDotLoader";

const AddAAwardImage = ({ props }) => {
  // const {
  //   // refetch
  // } = props;
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (data) => {
    //   setIsLoading(true);
    console.log(data);
    const formdata = new FormData();
    formdata.append("caption", data.caption);
    formdata.append("img_url", data.img_url[0]);

    //   const newAchievement = { caption, image_url: imageUrl };
    //   try {
    //     const res = await axios.post(
    //       `${import.meta.env.VITE_BASE_URL}/achievements`,
    //       formdata
    //     );
    //     if (res.status === 201) {
    //       toast.success("Achievement added successfully");
    //       refetch();
    //       setIsLoading(false);
    //       setImageUrl("");
    document.getElementById("allAwardImage").close();
    //     }
    //   } catch (error) {
    //     setIsLoading(false);
    //     toast.error("Something went wrong!");
    //   }
  };

  return (
    <div>
      <dialog id="allAwardImage" className="modal">
        <div className="modal-box bg-white text-black ">
          <form method="dialog" className="flex justify-between items-center">
            <h3 className="font-bold text-lg flex text-primary">
              Add Award Image
              <FaAward className="mt-1.5 ml-1" />
            </h3>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <form
            method="dialog"
            className=" bg-white text-black"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <div className="my-2">
              <label className="block text-sm font-medium mb-2 pl-1">Caption <span className="text-red-600">*</span></label>
              <input
                type="text"
                required
                className="input input-bordered input-sm w-full bg-white text-black"
                {...register("caption")}
              />
            </div>
            <div className="my-2">
            <label className="block text-sm font-medium mb-2 pl-1">Award Image <span className="text-red-600">*</span></label>
              <input
                type="file"
                required
                accept="image/png, image/jpg, image/jpeg"
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

export default AddAAwardImage;
