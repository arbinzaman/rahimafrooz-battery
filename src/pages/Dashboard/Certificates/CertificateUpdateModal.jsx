import { useState, useEffect } from "react";
import ThreeDotLoader from "../../../components/shared/Loaders/ThreeDotLoader";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";

const CertificateUpdateModal = ({ updateModalData }) => {
  const { selectedId, allCertificates, refetch } = updateModalData;
  const [isLoading, setLoading] = useState(false);

  const certificate = allCertificates?.find(
    (details) => details.id === selectedId
  );

  const { register, handleSubmit, reset } = useForm({
    defaultValues: certificate,
  });

  useEffect(() => {
    if (certificate) {
      reset(certificate);
    }
  }, [certificate, reset]);

  const handleUpdate = async (data) => {
    try {
      setLoading(true);
      const formdata = new FormData();
      formdata.append("title", data.title);
      formdata.append("img_url", data.img_url[0]);

      const res = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/certificates/${selectedId}`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 200) {
        reset();
        document.getElementById("updateCertificateModal").open = false;
        refetch();
        toast.success("Record updated successfully");
      }
    } catch (error) {
      console.error("Error updating location:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <dialog id="updateCertificateModal" className="modal">
      <div className="modal-box bg-white text-black">
        <form method="dialog" className="flex justify-between items-center">
          <p className="font-semibold font-primary uppercase text-primary">
            Update Certificate
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
                {certificate?.img_url && (
                  <div className="flex flex-col items-center justify-center my-1">
                    <p>Current Image</p>
                    <img src={certificate?.img_url} className="w-40" alt="" />
                  </div>
                )}

                <label>
                  Image <span className="text-red-600">*</span>
                </label>
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg"
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
  );
};

export default CertificateUpdateModal;
