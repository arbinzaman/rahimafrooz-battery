import axios from "axios";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaYoutube } from "react-icons/fa";

const AddAYouTubeLink = ({ props }) => {
  const { setIsLoading, refetch } = props;
  const { register, handleSubmit } = useForm();
  const formRef = useRef();

  const handleFormSubmit = async (data) => {
    // try {
    //   setIsLoading(true);
console.log(data);
    //   const res = await axios.post(
    //     `${import.meta.env.VITE_BASE_URL}/manufacturing-locations/`,
    //     data
    //   );

    //   if (res.status === 201) {
    //     formRef.current.reset();
    //     toast.success("New record has been added.");
    //     refetch();
    //     setIsLoading(false);
    //   }
    // } catch (error) {
    //   setIsLoading(false);
    //   console.log(error.message);
    //   toast.error("Something error occurred!");
    // }
  };

  return (
    <div>
      <dialog id="youtubeLink" className="modal">
        <div className="modal-box bg-white text-black">
          <p className="font-semibold font-primary uppercase text-primary flex">
            Add New YouTube Link <FaYoutube  className="mt-1 ml-2" />
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
              YouTube Link<span className="text-red-600">*</span>
                </label>
                <textarea
                  type="text"
                  required
                  className="border  rounded-md p-1 w-full bg-white text-black border-black "
                  {...register("yt_link")}
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

export default AddAYouTubeLink;
