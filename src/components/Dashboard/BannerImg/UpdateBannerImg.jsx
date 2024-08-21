import { useEffect, useState } from "react";
import ThreeDotLoader from "../../shared/Loaders/ThreeDotLoader";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const UpdateBrandImgModal = ({ updateModalProps }) => {
  const { selectedId, bannerImages, refetch } = updateModalProps;
  const [isLoading, setIsLoading] = useState(false);

  const bannerImg = bannerImages?.find((details) => details.id === selectedId);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: bannerImg,
  });

  useEffect(() => {
    if (bannerImg) {
      reset(bannerImg);
    }
  }, [bannerImg, reset]);

  const handleUpdate = async (data) => {
    try {
      setIsLoading(true);
      
      const files = data.img_url;
      const formdata = new FormData();
      formdata.append("page_name", data.page_name);
      Array.from(files).forEach((image) => {
        formdata.append("img_url", image);
      });

      const res = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/banner-images/${selectedId}`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 200) {
        reset();
        document.getElementById("updateBrand").open = false;
        refetch();
        toast.success("Record updated successfully");
      }
    } catch (error) {
      toast.error("Update FAQ failed!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <dialog id="updateBrand" className="modal">
        <div className="modal-box bg-white text-black">
          <form method="dialog" className="flex justify-between items-center">
            <p className="font-semibold font-primary uppercase text-primary">
              Update Banner Image
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
                  Brand Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  disabled
                  className="border  rounded-md p-1 w-full bg-gray-200 text-black border-black "
                  {...register("page_name")}
                />
              </div>

              <div className="my-2">
                {bannerImg?.img_url && (
                  <div className="flex flex-col items-center justify-center my-1">
                    <p>Current Image</p>
                    <div className="flex gap-2">
                      {bannerImg?.img_url.map((src, i) => (
                        <a
                          key={i}
                          href={src}
                          target="_blank"
                          title="Click to see the image"
                        >
                          <img
                            src={src}
                            alt={`${bannerImg.page_name} image`}
                            className="w-20"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                <label>
                  Image <span className="text-red-600">*</span>{" "}
                  <small className="text-gray-600">
                    (1280px X 460px recommended)
                  </small>
                </label>
                <input
                  type="file"
                  multiple="multiple"
                  accept="image/png, image/jpeg, image/jpg"
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
    </div>
  );
};

export default UpdateBrandImgModal;
