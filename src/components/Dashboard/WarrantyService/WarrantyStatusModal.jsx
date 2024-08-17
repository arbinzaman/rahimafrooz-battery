import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { MdOutlineDoneOutline } from "react-icons/md";
import Loader from "../../../components/shared/Loaders/Loader";
import Cookies from "js-cookie";

const WarrantyStatusModal = ({ updateModalProps }) => {
  const { selectedId, allWarrantyDetails, refetch } = updateModalProps;
  const [isLoading, setIsLoading] = useState(false);

  const singleWarranty = allWarrantyDetails?.find(
    (details) => details.id === selectedId
  );
  const { register, handleSubmit, reset } = useForm({
    defaultValues: singleWarranty,
  });

  useEffect(() => {
    if (singleWarranty) {
      reset(singleWarranty);
    }
  }, [singleWarranty, reset]);

  const handleUpdate = async (data) => {
    try {
      setIsLoading(true);
      data.name = singleWarranty?.name;
      data.email = singleWarranty?.email;
      data.short_code = singleWarranty?.short_code;
      data.vehicle_type = singleWarranty?.vehicle_type;
      data.purchase_dlr = singleWarranty?.purchase_dlr;
      data.purchase_date = singleWarranty?.purchase_date;

      const res = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/warranty-services/${selectedId}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 200) {
        document.getElementById("warrantyStatusModal").open = false;
        refetch();
        toast.success("Record updated successfully");
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
      <dialog id="warrantyStatusModal" className="modal">
        <div className="modal-box bg-white text-black ">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Status Update
              <MdOutlineDoneOutline className="text-medium ml-2 text-primary" />
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>

          <form method="dialog" onSubmit={handleSubmit(handleUpdate)}>
            <div className="my-2">
              <label>
                Warranty Deadline<span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                className="bg-white border  rounded-md px-2 py-1 w-full"
                {...register("warranty_deadline")}
              />
            </div>

            <div className="my-2">
              <label>
                Total Warranty<span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                className="bg-white border  rounded-md px-2 py-1 w-full"
                {...register("total_warranty")}
              />
            </div>
            <small className="text-gray-500">
              Type the total warranty in months
            </small>

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

export default WarrantyStatusModal;
