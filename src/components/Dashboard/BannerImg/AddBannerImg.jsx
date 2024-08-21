import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ThreeDotLoader from "../../../components/shared/Loaders/ThreeDotLoader";
import Cookies from "js-cookie";

const AddBannerImg = ({ props }) => {
  const { refetch } = props;
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleAddBrandImage = async (data) => {
    try {
      setIsLoading(true);
      const files = data.img_url;
      const formdata = new FormData();
      formdata.append("page_name", data.page_name);
      Array.from(files).forEach((image) => {
        formdata.append("img_url", image);
      });
      
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/banner-images`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 201) {
        reset();
        document.getElementById("addBrandModal").open = false;
        refetch();
        toast.success("New record has been added.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to add banner image");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <dialog id="addBrandModal" className="modal">
        <div className="modal-box bg-white text-black">
          <form method="dialog" className="flex justify-between items-center">
            <p className="font-semibold font-primary uppercase text-primary">
              Add New Banner Image
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>

          <div className="">
            <form
              method="dialog"
              onSubmit={handleSubmit(handleAddBrandImage)}
              className=""
            >
              <div className="my-2">
                <label>
                  Select Page <span className="text-red-600">*</span>
                </label>
                <select
                  required
                  className="border rounded-md p-1 w-full bg-white text-black border-black"
                  {...register("page_name")}
                >
                  <option value="home">Home</option>
                  <option value="board_members">Founder & Board Member</option>
                  <option value="storage_power">
                    Rahimafrooz Storage Power
                  </option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="achievement">Special & Achievement</option>
                  <option value="products_bd">Products - Bangladesh</option>
                  <option value="products_int">Products - International</option>
                  <option value="warranty">Warranty & Services</option>
                  <option value="partner">Became A Partner</option>
                  <option value="global_presence">Global Presence</option>
                </select>
              </div>

              <div className="my-2">
                <label>
                  Image <span className="text-red-600">*</span>{" "}
                  <small className="text-gray-600">
                    (1280px X 460px recommended)
                  </small>
                </label>
                <input
                  type="file"
                  required
                  multiple="multiple"
                  accept="image/png,image/jpg,image/jpeg"
                  className="file-input file-input-bordered file-input-sm w-full bg-white"
                  {...register("img_url")}
                />
                <small className="text-gray-600 p-2">
                  Please select less than 6 files less than 3 MB each.
                </small>
              </div>

              <div className="flex justify-end gap-3 items-center mt-3">
                {isLoading ? (
                  <ThreeDotLoader />
                ) : (
                  <button
                    type="submit"
                    className="flex gap-2 btn btn-sm bg-sky-500 border-0 text-white hover:bg-primary hover:text-white"
                  >
                    Add
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

export default AddBannerImg;
