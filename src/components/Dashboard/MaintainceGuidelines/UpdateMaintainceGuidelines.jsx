import { useEffect, useState } from "react";
import ThreeDotLoader from "../../shared/Loaders/ThreeDotLoader";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { GrHostMaintenance } from "react-icons/gr";

const UpdateMaintainceGuidelines = ({ updateModalProps }) => {
  const { selectedId, allInstructions, refetch } = updateModalProps;
  const [isLoading, setIsLoading] = useState(false);

  const singleInstruction = allInstructions?.find(
    (details) => details.id === selectedId
  );
  const { register, handleSubmit, reset } = useForm({
    defaultValues: singleInstruction,
  });

  useEffect(() => {
    if (singleInstruction) {
      reset(singleInstruction);
    }
  }, [singleInstruction, reset]);

  const handleUpdate = async (data) => {
    try {
      setIsLoading(true);

      const res = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/instructions/${selectedId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 200) {
        reset();
        document.getElementById("updateInstructionModal").open = false;
        refetch();
        toast.success("Record updated successfully");
      }
    } catch (error) {
      toast.error("Update Instruction failed!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <dialog id="updateInstructionModal" className="modal">
        <div className="modal-box bg-white text-black">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Update Instruction{" "}
              <GrHostMaintenance className="inline-block  mt-1" />
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>

          <div className="">
            <form
              method="dialog"
              onSubmit={handleSubmit(handleUpdate)}
              className=""
            >
              <div className="my-2">
                <label>
                  Title<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="border  rounded-md p-1 w-full bg-white text-black border-black "
                  {...register("title")}
                />
              </div>
              <div className="my-2">
                <label>Description</label>
                <textarea
                  type="text"
                  required
                  className="border rounded-md p-1 w-full h-32 bg-white text-black border-black"
                  {...register("description")}
                />
              </div>

              <div className="flex justify-end gap-3 items-center mt-3">
                {isLoading ? (
                  <ThreeDotLoader />
                ) : (
                  <button
                    type=""
                    className="flex gap-2 btn btn-sm bg-sky-500 border-0 text-white hover:bg-primary hover:text-white"
                  >
                    Update
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default UpdateMaintainceGuidelines;
