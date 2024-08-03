// import axios from "axios";
import { useForm } from "react-hook-form";
import { AiOutlineGlobal } from "react-icons/ai";
// import toast from "react-hot-toast";

const AddAGlobalPresenceCountry = ({ props }) => {
  const { 
    // refetch ,
     setIsLoading,} = props;

  const { register, handleSubmit,  } = useForm();

  // console.log(singleLocationDetails);

  const handleAddData = async (data) => {
    // try {
      setIsLoading(true);
      console.log(data);
    //   const res = await axios.post(
    //     `${import.meta.env.VITE_BASE_URL}/contact/global-locations`,
    //     data
    //   );
    //   if (res.status === 201) {
    //     toast.success("New global location added successfully");
    //     reset();
    //     setIsLoading(false);
    //     refetch();
    //   }
    // } catch (error) {
    //   console.log(error);
    //   toast.error("Something error occurred!");
    // }
  };

  return (
    <div>
       <dialog id="AddCountry" className="modal">
        <div className="modal-box bg-white text-black ">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Add Global Presence Country <AiOutlineGlobal className="mt-1" />
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <form method="dialog" onSubmit={handleSubmit(handleAddData)}>
            <div className="my-2">
              <label>
                Enter Region <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-white border  rounded-md px-2 py-1 w-full"
                {...register("region")}
              />
            </div>

            <div className="my-2">
              <label>
                Country Name <span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                className="bg-white border rounded-md px-2 py-1 w-full"
                {...register("countries")}
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

export default AddAGlobalPresenceCountry;
