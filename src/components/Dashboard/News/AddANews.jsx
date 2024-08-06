import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoading } from "../../../contexts/LoadingContext";

const AddANews = ({ addLocationModalProps }) => {
  const { refetch } = addLocationModalProps;
  const { isLoading, setIsLoading } = useLoading();
  const { register, handleSubmit, reset } = useForm();

  // console.log(singleLocationDetails);

  const handleAddData = async (data) => {
    try {
      setIsLoading(true);
      console.log(data);
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/contact/global-locations`,
        data
      );
      if (res.status === 201) {
        toast.success("New global location added successfully");
        reset();
        setIsLoading(false);
        refetch();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something error occurred!");
    }
  };

  return (
    <div>
      <dialog id="my_modal_69" className="modal">
        <div className="modal-box bg-white text-black ">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Add A Location 
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <form method="dialog" onSubmit={handleSubmit(handleAddData)}>
            <div className="my-2">
              <label>
                Enter title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                className="bg-white border rounded-md px- py-1 w-full"
                {...register("location_title")}
              />
            </div>

            <div className="my-2">
              <label>
                Location Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                className="bg-white border rounded-md px-2 py-1 w-full"
                {...register("location_name")}
              />
            </div>

            <div className="my-2">
              <label>
                Location <span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                required
                className="bg-white border rounded-md px-2 py-1 w-full"
                {...register("location")}
              />
            </div>
            <div className="my-2">
              <label>
                Phone Numbers <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                className="bg-white border rounded-md px-2 py-1 w-full"
                {...register("phone_numbers")}
              />
            </div>
            <div className="my-2">
              <label>
                Email<span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                className="bg-white border rounded-md px-2 py-1 w-full"
                {...register("email")}
              />
            </div>

            <div className="flex justify-end gap-3 items-center mt-3">
              <button
                type=""
                disabled={isLoading ? true : false}
                className="flex gap-2 btn btn-sm bg-sky-500 border-0 text-white hover:bg-primary hover:text-white"
              >
                Add
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

export default AddANews;
