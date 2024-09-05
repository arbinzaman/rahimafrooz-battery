import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import Cookies from "js-cookie";
import ThreeDotLoader from "../../shared/Loaders/ThreeDotLoader";

const AddANews = ({ prompts }) => {
  const { refetch } = prompts;
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  // console.log(singleLocationDetails);

  const handleAddNews = async (data) => {
    try {
      setIsLoading(true);
      
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("image_url", data.image_url[0]);

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/news`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 201) {
        document.getElementById("addNews").open = false;
        refetch();
        toast.success("Record updated successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something error occurred!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <dialog id="addNews" className="modal">
        <div className="modal-box bg-white text-black">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Add News
            </p>
            <button className="btn btn-sm btn-circle btn-ghost">✕</button>
          </form>
          <form method="dialog" onSubmit={handleSubmit(handleAddNews)}>
            <div className="my-2">
              <label>
                Enter title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-white border rounded-md px-2 py-1 w-full"
                {...register("title")}
              />
            </div>

            <div className="my-2">
              <label>
                Description <span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                className="bg-white border rounded-md px-2 py-1 w-full h-40"
                {...register("description")}
              />
            </div>

            <div className="my-2">
              <input
                type="file"
                className="file-input file-input-bordered file-input-sm w-full bg-white text-black"
                accept="image/png, image/jpg, image/jpeg"
                required
                {...register("image_url")}
              />
            </div>

            <div className="flex justify-end gap-3 items-center mt-3">
              {isLoading ? (
                <ThreeDotLoader />
              ) : (
                <button
                  type="submit"
                  className={`flex gap-2 btn btn-sm bg-primary text-white hover:bg-secondary hover:text-white`}
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

export default AddANews;
