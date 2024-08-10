import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { FaQuestion } from "react-icons/fa";
import ThreeDotLoader from "../../../components/shared/Loaders/ThreeDotLoader";
import axios from "axios";

const AddAFaq = ({ addModalProps }) => {
  const { refetch } = addModalProps;
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  // Define the API URL for adding FAQs
  const API_URL = `${import.meta.env.VITE_BASE_URL}/faqs`;

  const handleAddFAQ = async (data) => {
    try {
      setIsLoading(true);
      const res = await axios.post(API_URL, data);
      if (res.status === 201) {
        reset();
        document.getElementById("addFaq").open = false;
        refetch();
        toast.success("FAQ added successfully!");
      }
    } catch (error) {
      toast.error("Failed to add FAQ. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <dialog id="addFaq" className="modal">
      <div className="modal-box bg-white text-black">
        <form method="dialog" className="flex justify-between items-center">
          <p className="text-primary text-medium font-bold flex gap-2 my-2">
            Add Faq <FaQuestion className="inline-block ml-2" />
          </p>
          <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
        </form>
        <form
          onSubmit={handleSubmit(handleAddFAQ)}
          className="space-y-4 text-black"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Question</label>
            <input
              type="text"
              placeholder="Enter the question"
              {...register("question", { required: true })}
              className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Answer</label>
            <textarea
              placeholder="Enter the answer"
              {...register("answer", { required: true })}
              className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full h-32 resize-none"
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
                Add FAQ
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

export default AddAFaq;
