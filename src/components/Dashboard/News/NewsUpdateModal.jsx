import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const NewsUpdateModal = ({ updateModalProps }) => {
  const { selectedId, allNews, refetch } = updateModalProps;
  const [isLoading, setIsLoading] = useState(false);

  const singleNews = allNews?.find(
    (details) => details.id === selectedId
  );
  const { register, handleSubmit, reset } = useForm({
    defaultValues: singleNews,
  });

  useEffect(() => {
    if (singleNews) {
      reset(singleNews);
    }
  }, [singleNews, reset]);

  const handleUpdate = async (data) => {
    try {
      setIsLoading(true);
      console.log(data);
      const res = await axios.patch(
        `${
          import.meta.env.VITE_BASE_URL
        }/contact/global-locations/${selectedId}`,
        data
      );

      if (res.status === 200) {
        refetch();
        document.getElementById("my_modal_2").open = false;
        toast.success("Record updated successfully");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
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
              Update Location
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <form method="dialog" onSubmit={handleSubmit(handleUpdate)}>
            <div className="my-2">
              <label>
                Enter title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-white border  rounded-md px-2 py-1 w-full"
                {...register("title")}
              />
            </div>

            <div className="my-2">
              <label>
              Description <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-white border  rounded-md px-2 py-1 w-full"
                {...register("description")}
              />
            </div>

            <div className="my-2">
              <label>
                Location <span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                className="bg-white border  rounded-md px-2 py-1 w-full"
                {...register("location")}
              />
            </div>
            <div className="my-2">
              <label>
                Phone Numbers <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-white border  rounded-md px-2 py-1 w-full"
                {...register("phone_numbers")}
              />
            </div>
            <div className="my-2">
              <label>
                Email<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-white border  rounded-md px-2 py-1 w-full"
                {...register("email")}
              />
            </div>

            <div className="flex justify-end gap-3 items-center mt-3">
              <button
                type=""
                className="flex gap-2 btn btn-sm bg-primary text-white hover:bg-secondary hover:text-white"
              >
                Update
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

export default NewsUpdateModal;
