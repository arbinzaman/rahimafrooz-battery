/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import ThreeDotLoader from "../../../components/shared/Loaders/ThreeDotLoader";

const AddADealerDetailsModal = ({ addModalProps }) => {
  const { refetch } = addModalProps;
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddData = async (data) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("shop_name", data.shop_name);
      formData.append("address", data.address);
      formData.append("proprietor_name", data.proprietor_name);
      formData.append("phone_numbers", data.phone_numbers);
      formData.append("email", data.email);
      formData.append("coordinates", data.coordinates);
      formData.append("division", data.division);
      formData.append("district", data.district);
      formData.append("thana", data.thana);
      formData.append("image_url", data.image_url[0]);

      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/dealer-details`,
        formData
      );

      if (response.status === 201) {
        reset();
        document.getElementById("my_modal_69").open = false;
        refetch();
        toast.success("Dealer location and details added successfully!");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Error adding dealer location and details.");
    }
  };

  return (
    <section>
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
                  Enter Dealer/Shop <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="bg-white border rounded-md px-2 py-1 w-full"
                  {...register("shop_name")}
                />
              </div>

              <div className="my-2">
                <label>
                  Address <span className="text-red-600">*</span>
                </label>
                <textarea
                  type="text"
                  required
                  className="bg-white border rounded-md px-2 py-1 w-full"
                  {...register("address")}
                />
              </div>

              <div className="my-2">
                <label>
                  Proprietor Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="bg-white border rounded-md px-2 py-1 w-full"
                  {...register("proprietor_name")}
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
                <label>Email</label>
                <input
                  type="text"
                  className="bg-white border rounded-md px-2 py-1 w-full"
                  {...register("email")}
                />
              </div>

              <div className="my-2">
                <label>Coordinates</label>
                <input
                  type="text"
                  className="bg-white border rounded-md px-2 py-1 w-full"
                  {...register("coordinates")}
                />
              </div>

              <div className="my-2">
                <label>
                  Division<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="bg-white border rounded-md px-2 py-1 w-full"
                  {...register("division")}
                />
              </div>

              <div className="my-2">
                <label>
                  District<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="bg-white border rounded-md px-2 py-1 w-full"
                  {...register("district")}
                />
              </div>

              <div className="my-2">
                <label>
                  Thana<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="bg-white border rounded-md px-2 py-1 w-full"
                  {...register("thana")}
                />
              </div>

              <div className="my-2">
                <label>Image</label>
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-sm w-full bg-white"
                  {...register("image_url")}
                />
              </div>

              <div className="flex justify-end gap-3 items-center mt-3">
                {!isLoading ? (
                  <button
                    type=""
                    className="flex gap-2 btn btn-sm bg-sky-500 border-0 text-white hover:bg-primary hover:text-white"
                  >
                    Add
                  </button>
                ) : (
                  <>
                    <ThreeDotLoader />
                  </>
                )}
              </div>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </section>
  );
};

export default AddADealerDetailsModal;
