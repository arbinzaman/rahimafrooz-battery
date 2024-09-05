import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { GrHostMaintenance } from "react-icons/gr";
import ThreeDotLoader from "../../../components/shared/Loaders/ThreeDotLoader";
import axios from "axios";
import Cookies from "js-cookie";

const AddMaintainceGuidelines = ({ addModalProps }) => {
  const { refetch } = addModalProps;
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  // Define the API URL for adding FAQs
  const API_URL = `${import.meta.env.VITE_BASE_URL}/instructions`;

  const handleAddInstruction = async (data) => {
    try {
      setIsLoading(true);
      const res = await axios.post(API_URL, data, {
        headers: {
          Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
        },
      });
      if (res.status === 201) {
        reset();
        document.getElementById("addInstructionModal").open = false;
        refetch();
        toast.success("New instruction added successfully!");
      }
    } catch (error) {
      toast.error("Failed to add Instruction. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <dialog id="addInstructionModal" className="modal">
      <div className="modal-box bg-white text-black">
        <form method="dialog" className="flex justify-between items-center">
          <p className="text-primary text-medium font-bold flex gap-2 my-2">
            Add Maintaince Guidelines{" "}
            <GrHostMaintenance className="inline-block  mt-1" />
          </p>
          <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
        </form>
        <form
          onSubmit={handleSubmit(handleAddInstruction)}
          className="space-y-4 text-black"
        >
          <div>
            <label className="block text-sm font-medium mb-2">
              Title <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter the Title"
              {...register("title", { required: true })}
              className="input-sm border rounded-md p-2 w-full bg-white text-black border-black "
            />
          </div>

          <div className="my-2">
            <label>
              Description <span className="text-red-600">*</span>
            </label>
            <textarea
              type="text"
              required
              className="inputs-sm border rounded-md p-1 w-full h-32 bg-white text-black border-black"
              {...register("description", { required: true })}
            />
          </div>

          <div className="flex justify-end gap-3 items-center mt-3">
            {isLoading ? (
              <ThreeDotLoader />
            ) : (
              <button
                type="submit"
                className="flex gap-2 btn btn-sm bg-primary text-white hover:bg-secondary hover:text-white"
              >
                Add Details
              </button>
            )}
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default AddMaintainceGuidelines;
