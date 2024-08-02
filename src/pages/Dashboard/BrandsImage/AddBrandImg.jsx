import axios from "axios";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddBrandImg = ({ props }) => {
  const { setIsLoading, refetch } = props;
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
        formdata
      );

      if (res.status === 201) {
        formRef.current.reset();
        toast.success("New record has been added.");
        refetch();
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
      toast.error("Something error occurred!");
    }
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-white text-black">
          <p className="font-semibold font-primary uppercase text-primary">
            Add New Brand Image
          </p>
          <div className="">
            <form
              method="dialog"
              ref={formRef}
              onSubmit={handleSubmit(handleFormSubmit)}
              className=""
            >
              <div className="my-2">
                <label>
                Brand Code <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="border  rounded-md p-1 w-full bg-white text-black border-black "
                  {...register("title")}
                />
              </div>

              <div className="my-2">
                <input
                  type="file"
                  required
                  className="file-input file-input-bordered file-input-sm w-full bg-white"
                  {...register("image")}
                />
              </div>

              <div className="flex justify-end gap-3 items-center mt-3">
                <button
                  type=""
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

export default AddBrandImg;
