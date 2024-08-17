import { useForm } from "react-hook-form";
import { FaAward } from "react-icons/fa";
// import axios from "axios";
// import toast from "react-hot-toast";

const AddAAwardImage = ({ props }) => {
  const {
    setIsLoading,
    // refetch
  } = props;
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = async (data) => {
    //   setIsLoading(true);
    const formdata = new FormData();
    formdata.append("caption", data.caption);
    formdata.append("img_url", data.img_url[0]);

    //   const newAchievement = { caption, image_url: imageUrl };
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
          document.getElementById("allAwardImage").close();
    //     }
    //   } catch (error) {
    //     setIsLoading(false);
    //     toast.error("Something went wrong!");
    //   }
  };

  return (
    <div>
      <dialog id="allAwardImage" className="modal">
      <div className="modal-box bg-white text-black ">
          <form method="dialog" className="flex justify-between items-center">
          <h3 className="font-bold text-lg flex text-primary">
            Add New Achievement Image<FaAward className="mt-1.5 ml-1" />
          </h3>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
        <form
          method="dialog"
          className=" bg-white text-black"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          
          <div className="py-4">
            <textarea
              type="text"
              placeholder="caption"
              className="input input-bordered w-full mb-4 bg-white text-black"
              {...register("caption")}
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

export default AddAAwardImage;
