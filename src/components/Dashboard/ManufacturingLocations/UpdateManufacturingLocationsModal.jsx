import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateManufacturingLocationsModal = ({ updateModalProps }) => {
  const { selectedId, manufacturingDetails, setIsLoading, refetch } =
    updateModalProps;
  const { register, handleSubmit } = useForm();
  const [image, setImage] = useState(null);

  const singleManufacturingDetails = manufacturingDetails.find(
    (details) => details.id === selectedId
  );
  console.log(selectedId, singleManufacturingDetails);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  console.log(image);
//   const handleUpdate = async (id) => {
//     try {
//       setIsLoading(true);
//       const body = manufacturingDetails.find((details) => details.id === id);
//       // const res = await axios.patch(
//       //   `${import.meta.env.VITE_BASE_URL}/manufacturing-locations/${id}`,
//       //   { data: body }
//       // );
//       console.log(body);
//       // if (res.status === 200) {
//       toast.success("Record updated successfully");
//       refetch();
//       setIsLoading(false);
//       // }
//     } catch (error) {
//       setIsLoading(false);
//       console.log(error);
//       toast.error("Something error occurred!");
//     }
//   };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <div className="my-2">
              <label>
                Enter title <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                defaultValue={
                  singleManufacturingDetails === null
                    ? ""
                    : singleManufacturingDetails?.title
                }
                className="bg-base border  rounded-md p-1 w-full"
                {...register("title")}
              />
            </div>

            <div className="my-2">
              <label>
                Location or Type <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                defaultValue={
                  singleManufacturingDetails === null
                    ? ""
                    : singleManufacturingDetails?.location
                }
                className="bg-base border  rounded-md p-1 w-full"
                {...register("location")}
              />
            </div>

            <div className="my-2">
              <label>
                Description <span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                defaultValue={
                  singleManufacturingDetails === null
                    ? ""
                    : singleManufacturingDetails?.description
                }
                className="bg-base border  rounded-md p-1 w-full"
                {...register("description")}
              />
            </div>

            <div className="my-2">
              <div className="flex justify-center">
                <img src={image ? image: singleManufacturingDetails?.imageurl} className="w-96 my-3" alt="" />
              </div>
              <input
                type="file"
                className="file-input file-input-bordered file-input-sm w-full"
                onChange={handleImageChange}
                {...register("image")}
              />
            </div>

            <div className="flex justify-end gap-3 items-center mt-3">
              <button
                type=""
                className="flex gap-2 btn btn-sm bg-sky-500 border-0 text-white hover:bg-primary hover:text-white"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateManufacturingLocationsModal;
