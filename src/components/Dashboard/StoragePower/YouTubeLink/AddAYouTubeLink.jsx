import axios from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaYoutube } from "react-icons/fa";
import ThreeDotLoader from "../../../shared/Loaders/ThreeDotLoader";

const AddAYouTubeLink = ({ props }) => {
  const { refetch } = props;
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm();
  const formRef = useRef();

  const handleFormSubmit = async (data) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/storage-power/youtube-video`,
        data
      );
      if (res.status === 201) {
        formRef.current.reset();
        refetch();
        setIsLoading(false);
        document.getElementById("youtubeLink").open = false;
        toast.success("New record has been added.");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
      toast.error("Something error occurred!");
    }
  };

  return (
    <div>
      <dialog id="youtubeLink" className="modal">
        <div className="modal-box bg-white text-black">
          <p className="font-semibold font-primary uppercase text-primary flex">
            Add New YouTube Link <FaYoutube className="mt-1 ml-2" />
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
                <input
                  type="text"
                  required
                  className="border  rounded-md p-1 w-full bg-white text-black border-black "
                  {...register("video_url")}
                />
              </div>

              <div className="flex justify-end gap-3 items-center mt-3">
                {!isLoading ? (
                  <button
                    type=""
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

export default AddAYouTubeLink;
