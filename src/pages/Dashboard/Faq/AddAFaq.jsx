import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { FaQuestion } from "react-icons/fa";

const AddAFaq = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Define the API URL for adding FAQs
  const API_URL = `${import.meta.env.VITE_BASE_URL}/faqs`;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      toast.success("FAQ added successfully!");
      reset(); // Reset form fields after successful submission
      navigate("/dashboard/all-faqs"); // Redirect to the FAQs list
    } catch (error) {
      toast.error("Failed to add FAQ. Please try again.");
      console.error("Error adding FAQ:", error);
    } finally {
      setIsSubmitting(false);
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
          onSubmit={handleSubmit(onSubmit)}
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

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center gap-2"
            >
              {isSubmitting ? (
                <span>Submitting...</span>
              ) : (
                <>
                  Add FAQ <FaQuestion />
                </>
              )}
            </button>
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
