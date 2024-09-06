import axios from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import ThreeDotLoader from "../../shared/Loaders/ThreeDotLoader";

const AddManufacturingLocationsForm = ({ props }) => {
  const { refetch } = props;
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const formRef = useRef();

  const handleFormSubmit = async (data) => {
    try {
      setIsLoading(true);
      const formdata = new FormData();
      formdata.append("title", data.title);
      formdata.append("location", data.location);
      formdata.append("description", data.description);
      formdata.append("image", data.image[0]);

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/manufacturing-locations/`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 201) {
        formRef.current.reset();
        document.getElementById("my_modal_2").open = false;
        refetch();
        toast.success("New record has been added.");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
      toast.error("Something error occurred!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white text-black ">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Add A Review
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <form
            method="dialog"
            ref={formRef}
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <div className="my-2">
              <label>
                Enter title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                className="bg-base border  rounded-md p-1 w-full"
                {...register("title")}
              />
            </div>

            <div className="my-2">
              <label>
                Location or Type <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                className="bg-base border  rounded-md p-1 w-full"
                {...register("location")}
              />
            </div>

            <div className="my-2">
              <label>
                Description <span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                required
                className="bg-base border  rounded-md p-1 w-full"
                {...register("description")}
              />
            </div>

            <div className="my-2">
              <input
                type="file"
                required
                className="file-input file-input-bordered file-input-sm w-full bg-white text-black"
                {...register("image")}
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

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default AddManufacturingLocationsForm;
