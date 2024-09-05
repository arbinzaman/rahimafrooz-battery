import { useState } from "react";
import ThreeDotLoader from "../../../components/shared/Loaders/ThreeDotLoader";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const AddACertificateData = ({ addCertificateModal }) => {
  const { refetch } = addCertificateModal;
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const handleAddCertificate = async (data) => {
    try {
      setIsLoading(true);
      const formdata = new FormData();
      formdata.append("title", data.title);
      formdata.append("img_url", data.img_url[0]);

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/certificates`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 201) {
        reset();
        document.getElementById("addCertificateModal").open = false;
        refetch();
        toast.success("New record has been added.");
      }
    } catch (error) {
      toast.error("Add certificate failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <dialog id="addCertificateModal" className="modal">
      <div className="modal-box bg-white text-black">
        <form method="dialog" className="flex justify-between items-center">
          <p className="font-semibold font-primary uppercase text-primary">
            Add New Certificate
          </p>
          <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
        </form>

        <div className="">
          <form
            method="dialog"
            onSubmit={handleSubmit(handleAddCertificate)}
            className=""
          >
            <div className="my-2">
              <label>
                Certificate Title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                className="border  rounded-md p-1 w-full bg-white text-black border-black "
                {...register("title")}
              />
            </div>

            <div className="my-2">
              <label>
                Image <span className="text-red-600">*</span>
              </label>
              <input
                type="file"
                required
                accept="image/png,image/jpg, image/jpeg"
                className="file-input file-input-bordered file-input-sm w-full bg-white"
                {...register("img_url")}
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
  );
};

export default AddACertificateData;
