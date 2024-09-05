import { useForm } from "react-hook-form";
import { useLoading } from "../../../../contexts/LoadingContext";
import axios from "axios";
import toast from "react-hot-toast";
import ThreeDotLoader from "../../../../components/shared/Loaders/ThreeDotLoader";
import Cookies from "js-cookie";

const AddAReview = ({ prompts }) => {
  const { refetch } = prompts;
  const { isLoading, setIsLoading } = useLoading();
  const { register, handleSubmit, reset } = useForm();

  const handleAddData = async (data) => {
    try {
      setIsLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/reviews`,
        data,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 201) {
        reset();
        document.getElementById("reviews").open = false;
        refetch();
        toast.success("New global location added successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something error occurred!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <dialog id="reviews" className="modal">
        <div className="modal-box bg-white text-black ">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Add A Review
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <form method="dialog" onSubmit={handleSubmit(handleAddData)}>
            <div className="my-2">
              <label>
                User Name<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                className="bg-white border rounded-md px-2 py-1 w-full"
                {...register("user_name")}
              />
            </div>

            <div className="my-2">
              <label>
                Review <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                className="bg-white border rounded-md px-2 py-1 w-full"
                {...register("review")}
              />
            </div>

            <div className="flex justify-end gap-3 items-center mt-3">
              {isLoading ? (
                <ThreeDotLoader />
              ) : (
                <button
                  type=""
                  disabled={isLoading ? true : false}
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

export default AddAReview;
