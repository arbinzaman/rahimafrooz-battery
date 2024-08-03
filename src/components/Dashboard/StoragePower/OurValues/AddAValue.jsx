import axios from "axios";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { RxValueNone } from "react-icons/rx";

const AddAValue = ({ props }) => {
  const { setIsLoading, refetch } = props;
  const { register, handleSubmit } = useForm();
  const formRef = useRef();

  const handleFormSubmit = async (data) => {
    try {
      setIsLoading(true);
      const formdata = new FormData();
      formdata.append("caption", data.title);
      formdata.append("img_url", data.img_url[0]);

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
      <dialog id="values" className="modal">
        <div className="modal-box bg-white text-black">
          <p className="font-semibold font-primary uppercase text-primary flex">
            Add New Value Image <RxValueNone className="mt-1 ml-2" />
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
               Caption <span className="text-red-600">*</span>
                </label>
                <textarea
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
                  {...register("img_url")}
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

export default AddAValue;
