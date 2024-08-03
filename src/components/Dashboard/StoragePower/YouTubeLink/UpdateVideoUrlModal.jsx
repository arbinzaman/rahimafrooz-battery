import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateVideoUrlModal = ({ props }) => {
  const { allYoutubeLinks, selectedId, refetch } = props;
  const [isLoading, setIsLoading] = useState(false);

  const singleVideoURL = allYoutubeLinks?.find(
    (details) => details.id === selectedId
  );

  const { register, handleSubmit, reset } = useForm({
    defaultValues: singleVideoURL,
  });

  useEffect(() => {
    if (singleVideoURL) {
      reset(singleVideoURL);
    }
  }, [singleVideoURL, reset]);

  const handleUpdate = async (data) => {
    try {
      setIsLoading(true);
      const res = await axios.patch(
        `${
          import.meta.env.VITE_BASE_URL
        }/storage-power/youtube-video/${selectedId}`,
        data
      );
      if (res.status === 200) {
        refetch();
        setIsLoading(false);
        document.getElementById("update_videoURL").open = false;
        toast.success("New record has been updated.");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
      toast.error("Something error occurred!");
    }
  };

  return (
    <div>
      <dialog id="update_videoURL" className="modal">
        <div className="modal-box bg-white text-black">
          <form method="dialog" className="flex justify-between items-center">
            <p className="font-semibold font-primary uppercase text-primary flex">
              Update Video URL
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <div className="">
            <form
              method="dialog"
              onSubmit={handleSubmit(handleUpdate)}
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
                <button
                  type=""
                  className="flex gap-2 btn btn-sm bg-sky-500 border-0 text-white hover:bg-primary hover:text-white"
                >
                  Update
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

export default UpdateVideoUrlModal;
