import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { GrDocumentImage } from "react-icons/gr";

const AddFactoryInformationModal = () => {
  const { register, handleSubmit } = useForm();
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      const formdata = new FormData();
      formdata.append("factory_title", data.factory_title);
      formdata.append("description", data.description);
      formdata.append("corner_text", data.corner_text);
      formdata.append("image_url", data.image_url[0]);
      console.log(formdata);
      console.log(data);
      setIsLoading(true);

      //   const res = await axios.post(
      //     `${import.meta.env.VITE_BASE_URL}/manufacturing-locations/`,
      //     formdata
      //   );
      //   if (res.status === 201) {
      //     formRef.current.reset();
      //     toast.success("New record has been added.");
      //   }
    } catch (error) {
      console.log(error.message);
      toast.error("Something error occurred!");
    }
  };

  return (
    <section className="max-w-screen-md mx-auto p-4">
      <dialog id="img_text" className="modal">
        <div className="modal-box bg-white text-black ">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Add a Factory Informations{" "}
              <GrDocumentImage className=" ml-2 mt-1 " />
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 text-black"
          >
            <div>
              <label className="block text-sm font-medium mb-2">
                Factory Title
              </label>
              <input
                type="text"
                placeholder="Factory Title"
                {...register("factory_title", { required: true })}
                className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                type="text"
                placeholder="Description"
                {...register("description", { required: true })}
                className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Corner text
              </label>
              <input
                type="text"
                placeholder="Corner Text"
                {...register("corner_text", { required: true })}
                className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
              />
            </div>

            <div className="my-2">
              <label className="block text-sm font-medium mb-2">Image</label>
              <input
                type="file"
                required
                accept="image/png,  image/jpeg"
                className="file-input file-input-bordered file-input-sm w-full bg-white"
                {...register("image_url")}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-secondary hove:bg-primary hover:cursor-pointer text-white px-4  rounded-md btn-sm "
              >
                Add Factory Information
              </button>
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

export default AddFactoryInformationModal;
