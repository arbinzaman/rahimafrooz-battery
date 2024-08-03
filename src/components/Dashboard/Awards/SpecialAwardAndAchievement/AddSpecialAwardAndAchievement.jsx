import { useForm } from "react-hook-form";
import { FaAward } from "react-icons/fa";
// import axios from "axios";
// import toast from "react-hot-toast";

const AddSpecialAwardAndAchievement = ({ props }) => {
  const {
    setIsLoading,
    // refetch
  } = props;
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = async (data) => {
    //   setIsLoading(true);
    const formdata = new FormData();
    formdata.append("description", data.description);
    formdata.append("img_url", data.img_url[0]);

    //   const newAchievement = { description, image_url: imageUrl };
    //   try {
    //     const res = await axios.post(
    //       `${import.meta.env.VITE_BASE_URL}/achievements`,
    //       formdata
    //     );
    //     if (res.status === 201) {
    //       toast.success("Achievement added successfully");
    //       refetch();
    //       setIsLoading(false);
    //       setImageUrl("");
    //       document.getElementById("my_modal_2").close();
    //     }
    //   } catch (error) {
    //     setIsLoading(false);
    //     toast.error("Something went wrong!");
    //   }
  };

  return (
    <div>
      <dialog id="my_modal_2" className="modal">
        <form
          method="dialog"
          className="modal-box bg-white text-black"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <h3 className="font-bold text-lg flex text-primary">
            Add a new Achievement <FaAward className="mt-1.5 ml-1" />
          </h3>
          <div className="py-4">
            <textarea
              type="text"
              placeholder="Description"
              className="input input-bordered w-full mb-4 bg-white text-black"
              {...register("description")}
            />
          </div>
          <div className="my-2">
            <input
              type="file"
              required
              className="file-input file-input-bordered file-input-sm w-full bg-white text-black"
              {...register("img_url")}
            />
          </div>

          <div className="modal-action">
            <button
              className="btn  btn-xs btn-ghost bg-green-500 text-white"
              onClick={handleFormSubmit}
            >
              Add
            </button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-xs btn-ghost bg-red-500 text-white">
                Close
              </button>
            </form>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default AddSpecialAwardAndAchievement;
