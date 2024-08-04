import axios from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ThreeDotLoader from "../../../shared/Loaders/ThreeDotLoader";

const AddAValueModal = ({ props }) => {
  const { refetch } = props;
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const formRef = useRef();

  const handleFormSubmit = async (data) => {
    try {
      setIsLoading(true);
      const formdata = new FormData();
      formdata.append("caption", data.caption);
      formdata.append("image_url", data.image_url[0]);
      
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/storage-power/our-values/`,
        formdata
      );

      if (res.status === 201) {
        formRef.current.reset();
        toast.success("New record has been added.");
        document.getElementById("values").open = false;
        refetch();
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Something error occurred!");
    }
  };

  return (
    <div>
      <dialog id="values" className="modal">
        <div className="modal-box bg-white text-black">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Add New Value Info (Logo and Caption)
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <div className="">
            <form
              method="dialog"
              ref={formRef}
              onSubmit={handleSubmit(handleFormSubmit)}
              className=""
            >
              <div className="my-2">
                <label>
                  Caption <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="border  rounded-md p-1 w-full bg-white text-black border-black "
                  {...register("caption")}
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
                    type="submit"
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

export default AddAValueModal;
