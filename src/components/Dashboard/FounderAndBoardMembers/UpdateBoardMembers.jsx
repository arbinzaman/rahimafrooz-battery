import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loader from "../../shared/Loaders/Loader";
import Cookies from "js-cookie";
import ThreeDotLoader from "../../shared/Loaders/ThreeDotLoader";

const UpdateBoardMembers = ({ updateModalProps }) => {
  const { selectedId, allBoardMembers, refetch } = updateModalProps;
  const [isLoading, setIsLoading] = useState(false);
  const singleBoardMemberData = allBoardMembers.find(
    (details) => details.id === selectedId
  );
  const { register, handleSubmit, reset } = useForm({
    defaultValues: singleBoardMemberData,
  });

  useEffect(() => {
    if (singleBoardMemberData) {
      reset(singleBoardMemberData);
    }
  }, [singleBoardMemberData, reset]);

  const handleUpdate = async (data) => {
    try {
      setIsLoading(true);
      const formdata = new FormData();
      formdata.append("name", data.name);
      formdata.append("designation", data.designation);
      formdata.append("description", data.description);
      formdata.append("image_url", data.image_url[0]);
      formdata.append("facebook", data.facebook);
      formdata.append("instagram", data.instagram);
      formdata.append("linkedin", data.linkedin);

      const res = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/manufacturing-locations/${selectedId}`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 200) {
        refetch();
        document.getElementById("boardMembers").open = false;
        toast.success("Record updated successfully");
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Something error occurred!");
    }
  };
  if (isLoading) return <Loader />;

  return (
    <div>
      <dialog id="boardMembers" className="modal">
        <div className="modal-box bg-white">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Update Board Members Details
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <form method="dialog" onSubmit={handleSubmit(handleUpdate)}>
            <div className="my-2">
              <label>
                Enter name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                defaultValue={
                  singleBoardMemberData !== null
                    ? singleBoardMemberData?.name
                    : ""
                }
                className="bg-base border rounded-md px-2 py-1 w-full"
                {...register("name")}
              />
            </div>

            <div className="my-2">
              <label>
                Designation <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                defaultValue={
                  singleBoardMemberData !== null
                    ? singleBoardMemberData?.designation
                    : ""
                }
                className="bg-base border rounded-md px-2 py-1 w-full"
                {...register("designation")}
              />
            </div>

            <div className="my-2">
              <label>
                Description <span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                defaultValue={
                  singleBoardMemberData !== null
                    ? singleBoardMemberData?.description
                    : ""
                }
                className="bg-base border rounded-md h-36 px-2 py-1 w-full"
                {...register("description")}
              />
            </div>

            <div className="my-2">
              {singleBoardMemberData?.image_url && (
                <div className="flex justify-center">
                  <img
                    src={singleBoardMemberData?.image_url}
                    className="w-52 shadow-xl my-3"
                    alt=""
                  />
                </div>
              )}
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                className="file-input file-input-bordered file-input-sm w-full"
                {...register("image_url")}
              />
            </div>

            <div className="my-2">
              <label>
                Facebook URL <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                defaultValue={
                  singleBoardMemberData?.social_media_links?.[0]?.facebook || ""
                }
                className="bg-base border rounded-md px-2 py-1 w-full"
                {...register("facebook")}
              />
            </div>

            <div className="my-2">
              <label>
                Instagram URL <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                defaultValue={
                  singleBoardMemberData?.social_media_links?.[0]?.instagram ||
                  ""
                }
                className="bg-base border rounded-md px-2 py-1 w-full"
                {...register("instagram")}
              />
            </div>

            <div className="my-2">
              <label>
                LinkedIn URL <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                defaultValue={
                  singleBoardMemberData?.social_media_links?.[0]?.linkedin || ""
                }
                className="bg-base border rounded-md px-2 py-1 w-full"
                {...register("linkedin")}
              />
            </div>

            <div className="flex justify-end gap-3 items-center mt-3">
              {isLoading ? (
                <ThreeDotLoader />
              ) : (
                <button
                  type=""
                  className="flex gap-2 btn btn-sm bg-secondary text-white hover:bg-primary hover:text-white"
                >
                  Update
                </button>
              )}
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

export default UpdateBoardMembers;
