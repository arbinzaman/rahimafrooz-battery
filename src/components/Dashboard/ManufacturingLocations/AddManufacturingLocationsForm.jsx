import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddManufacturingLocationsForm = () => {
  const { register, handleSubmit } = useForm();
  const formRef = useRef();
  const handleFormSubmit = async (data) => {
    try {
      const formdata = new FormData();
      formdata.append("title", data.title);
      formdata.append("location", data.location);
      formdata.append("description", data.description);
      formdata.append("image", data.image[0]);

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/manufacturing-locations/`,
        formdata
      );

      console.log(res);
      if (res.status === 201) {
        formRef.current.reset();
        toast.success("New record has been added.");
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something error occurred!");
    }
  };
  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <p className="font-semibold font-primary uppercase">
            Add New Details
          </p>
          <div className="">
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
                  placeholder=""
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
                  placeholder=""
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
                  placeholder=""
                  className="bg-base border  rounded-md p-1 w-full"
                  {...register("description")}
                />
              </div>

              <div className="my-2">
                <input
                  type="file"
                  required
                  className="file-input file-input-bordered file-input-sm w-full"
                  {...register("image")}
                />
              </div>
              
              <div className="flex justify-end gap-3 items-center mt-3">
                <button
                  type="submit"
                  className="flex gap-2 btn btn-sm bg-sky-500 border-0 text-white hover:bg-primary hover:text-white"
                >
                  Add
                </button>
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

export default AddManufacturingLocationsForm;
