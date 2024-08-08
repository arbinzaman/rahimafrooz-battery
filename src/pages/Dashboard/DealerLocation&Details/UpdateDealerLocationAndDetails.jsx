import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import ThreeDotLoader from "../../../components/shared/Loaders/ThreeDotLoader";

const UpdateDealerLocationAndDetails = ({ updateModalProps }) => {
  const { selectedId, allDealersDetails, refetch } = updateModalProps;
  const [isLoading, setIsLoading] = useState();

  const singleDealerDetails = allDealersDetails.find(
    (details) => details.id === selectedId
  );

  const { register, handleSubmit, reset } = useForm({
    defaultValues: singleDealerDetails,
  });

  useEffect(() => {
    if (singleDealerDetails) {
      reset(singleDealerDetails);
    }
  }, [singleDealerDetails, reset]);

  const handleUpdate = async (data) => {
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

      const res = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/dealer-details/${selectedId}`,
        formData
      );

      if (res.status === 200) {
        console.log(res);
        reset();
        document.getElementById("dealer_details_update").open = false;
        refetch();
        toast.success("Dealer details updated successfully!");
      }
    } catch (error) {
      toast.error("Error updating dealer details.");
      console.error("Error updating dealer details:", error);
    }
  };

  return (
    <section>
      <dialog id="dealer_details_update" className="modal">
        <div className="modal-box bg-white text-black ">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Update Location
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <form method="dialog" onSubmit={handleSubmit(handleUpdate)}>
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
              <p className="text-center">Current Image</p>
              {singleDealerDetails?.image_url && (
                <div className="flex justify-center">
                  <img
                    src={singleDealerDetails?.image_url}
                    className="w-96 my-3"
                    alt=""
                  />
                </div>
              )}
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
                  className="flex gap-2 btn btn-sm bg-secondary text-white hover:bg-primary hover:text-white"
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
    </section>
  );
};

export default UpdateDealerLocationAndDetails;
