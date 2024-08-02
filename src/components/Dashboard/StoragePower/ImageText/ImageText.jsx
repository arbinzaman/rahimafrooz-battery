// import axios from "axios";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ImageText = () => {
  const { register, handleSubmit } = useForm();
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    try {
      const formdata = new FormData();
      formdata.append("factory_title", data.factory_title);
      formdata.append("description", data.description);
      formdata.append("corner_text", data.corner_text);
      formdata.append("image_url", data.image_url[0]);
      console.log(formdata);
      console.log(data);
      setIsSubmitting(true);
      
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
    <div>
      <section className="max-w-screen-md mx-auto p-4">
        <h1 className="text-center text-2xl font-bold mb-6 text-primary">
          Add New User
        </h1>
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
              className="file-input file-input-bordered file-input-sm w-full bg-white"
              {...register("image_url")}
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded-md btn-sm "
            >
              {isSubmitting ? "Submitting..." : "Add Text & Image"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ImageText;
