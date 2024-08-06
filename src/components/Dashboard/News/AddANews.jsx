import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoading } from "../../../contexts/LoadingContext";
import { useState } from "react";

const AddANews = ({ prompts }) => {
  const { refetch } = prompts;
  const { isLoading, setIsLoading } = useLoading();
  const { register, handleSubmit, } = useForm();
  
  const [image, setImage] = useState(null); // State to handle image
  const [publishDate, setPublishDate] = useState(""); // State for timestamp

  // console.log(singleLocationDetails);

  const handleUpdate = async (data) => {
    setPublishDate(new Date().toISOString()); // Set default publish date
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("publish_date", publishDate);
    if (image) {
      formData.append("image_url", image);
    }
    console.log(formData);

    try {
      setIsLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/news`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Necessary for file uploads
          },
        }
      );

      if (res.status === 200) {
        refetch();
        document.getElementById("addNews").open = false;
        toast.success("Record updated successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something error occurred!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };


  return (
    <div>
    <dialog id="addNews" className="modal">
      <div className="modal-box bg-white text-black">
        <form method="dialog" className="flex justify-between items-center">
          <p className="text-primary text-medium font-bold flex gap-2 my-2">
            Update News
          </p>
          <button className="btn btn-sm btn-circle btn-ghost">✕</button>
        </form>
        <form method="dialog" onSubmit={handleSubmit(handleUpdate)}>
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
            <input
              type="text"
              className="bg-white border rounded-md px-2 py-1 w-full"
              {...register("description")}
            />
          </div>

          <div className="my-2">
            <input
              type="file"
              className="file-input file-input-bordered file-input-sm w-full bg-white text-black"
              onChange={handleImageChange}
            />
          </div>


          <div className="flex justify-end gap-3 items-center mt-3">
            <button
              type="submit"
              className={`flex gap-2 btn btn-sm ${
                isLoading ? "bg-gray-400" : "bg-primary text-white hover:bg-secondary hover:text-white"
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update"}
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

export default AddANews;
