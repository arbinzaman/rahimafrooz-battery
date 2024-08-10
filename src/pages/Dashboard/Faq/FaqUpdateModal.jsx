import { useState, useEffect } from "react";
import ThreeDotLoader from "../../../components/shared/Loaders/ThreeDotLoader";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const FaqUpdateModal = ({ updateModalProps }) => {
  const { selectedId, allFaqs, refetch } = updateModalProps;
  const [isLoading, setIsLoading] = useState(false);

  const faq = allFaqs?.find((details) => details.id === selectedId);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: faq,
  });

  useEffect(() => {
    if (faq) {
      reset(faq);
    }
  }, [faq, reset]);

  const handleUpdate = async (data) => {
    try {
      setIsLoading(true);
      const res = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/faqs/${selectedId}`,
        data
      );

      if (res.status === 200) {
        reset();
        document.getElementById("updateFAQ").open = false;
        refetch();
        toast.success("Record updated successfully");
      }
    } catch (error) {
      toast.error("Update FAQ failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <dialog id="updateFAQ" className="modal">
      <div className="modal-box bg-white text-black ">
        <form method="dialog" className="flex justify-between items-center">
          <p className="text-primary text-medium font-bold flex gap-2 my-2">
            Update FAQ
          </p>
          <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
        </form>
        <form method="dialog" onSubmit={handleSubmit(handleUpdate)}>
          <div className="my-2">
            <label>
              Question <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="bg-white border  rounded-md px-2 py-1 w-full"
              {...register("question")}
            />
          </div>

          <div className="my-2">
            <label>
              Answer<span className="text-red-600">*</span>
            </label>
            <textarea
              type="text"
              className="bg-white border rounded-md px-2 py-1 w-full"
              {...register("answer")}
            />
          </div>

          <div className="flex justify-end gap-3 items-center mt-3">
            {!isLoading ? (
              <button
                type=""
                className="flex gap-2 btn btn-sm bg-primary text-white hover:bg-secondary hover:text-white"
              >
                Update
              </button>
            ) : (
              <ThreeDotLoader />
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

export default FaqUpdateModal;
