import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateFactoryInformationModal = ({ updateModalProps }) => {
  const { selectedId, allFactoryInformations, refetch } = updateModalProps;
  const [isLoading, setIsLoading] = useState(false);

  const singleFactoryInformation = allFactoryInformations.find(
    (details) => details.id === selectedId
  );
  const { register, handleSubmit, reset } = useForm({
    defaultValues: singleFactoryInformation,
  });

  useEffect(() => {
    if (singleFactoryInformation) {
      reset(singleFactoryInformation);
    }
  }, [singleFactoryInformation, reset]);

  const handleUpdate = async (data) => {
    try {
      setIsLoading(true);
      const formdata = new FormData();
      formdata.append("factory_title", data.factory_title);
      formdata.append("description", data.description);
      formdata.append("corner_text", data.corner_text);
      formdata.append("image_url", data.image_url[0]);

      const res = await axios.patch(
        `${
          import.meta.env.VITE_BASE_URL
        }/storage-power/factory-informations/${selectedId}`,
        formdata
      );

      if (res.status === 200) {
        document.getElementById("update_factory_info_modal").open = false;
        refetch();
        toast.success("Record updated successfully");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Something error occurred!");
    }
  };

  return (
    <div>
      <dialog id="update_factory_info_modal" className="modal">
        <div className="modal-box  bg-white">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Update Factory Information
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <form method="dialog" onSubmit={handleSubmit(handleUpdate)}>
            <div className="my-2">
              <label>
                Enter Factory title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-base border rounded-md px-2 py-1 w-full"
                {...register("factory_title")}
              />
            </div>

            <div className="my-2">
              <label>
                Description <span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                className="bg-base border rounded-md h-36 px-2 py-1 w-full"
                {...register("description")}
              />
            </div>

            <div className="my-2">
              <label>
                Corner Text <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-base border rounded-md px-2 py-1 w-full"
                {...register("corner_text")}
              />
            </div>

            <div className="my-2">
              {singleFactoryInformation?.imageurl && (
                <div className="flex justify-center">
                  <img
                    src={singleFactoryInformation?.imageurl}
                    className="w-96 my-3"
                    alt=""
                  />
                </div>
              )}
              <input
                type="file"
                className="file-input file-input-bordered file-input-sm w-full"
                {...register("image_url")}
              />
            </div>

            <div className="flex justify-end gap-3 items-center mt-3">
              <button
                type=""
                className="flex gap-2 btn btn-sm bg-secondary text-white hover:bg-primary hover:text-white"
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

export default UpdateFactoryInformationModal;
