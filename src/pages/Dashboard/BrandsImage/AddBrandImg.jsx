import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ThreeDotLoader from "../../../components/shared/Loaders/ThreeDotLoader";

const AddBrandImg = ({ props }) => {
  const { refetch } = props;
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleAddBrandImage = async (data) => {
    try {
      setIsLoading(true);
      const formdata = new FormData();
      formdata.append("brand_name", data.brand_name);
      formdata.append("image_url", data.image_url[0]);

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/brands`,
        formdata
      );

      if (res.status === 201) {
        reset();
        document.getElementById("addBrandModal").open = false;
        refetch();
        toast.success("New record has been added.");
      }
    } catch (error) {
      const message = error.response.data.message.split(":")[1];
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <dialog id="addBrandModal" className="modal">
        <div className="modal-box bg-white text-black">
          <form method="dialog" className="flex justify-between items-center">
            <p className="font-semibold font-primary uppercase text-primary">
              Add New Brand Image
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>

          <div className="">
            <form
              method="dialog"
              onSubmit={handleSubmit(handleAddBrandImage)}
              className=""
            >
              <div className="my-2">
                <label>
                  Brand Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="border  rounded-md p-1 w-full bg-white text-black border-black "
                  {...register("brand_name")}
                />
                <small className="text-gray-500">
                  Preferred to write in BLOCK letter and Unique brand name.
                </small>
              </div>

              <div className="my-2">
                <label>
                  Image <span className="text-red-600">*</span>
                </label>
                <input
                  type="file"
                  required
                  className="file-input file-input-bordered file-input-sm w-full bg-white"
                  {...register("image_url")}
                />
              </div>

              <div className="flex justify-end gap-3 items-center mt-3">
                {isLoading ? (
                  <ThreeDotLoader />
                ) : (
                  <button
                    type=""
                    className="flex gap-2 btn btn-sm bg-sky-500 border-0 text-white hover:bg-primary hover:text-white"
                  >
                    Add
                  </button>
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

export default AddBrandImg;
