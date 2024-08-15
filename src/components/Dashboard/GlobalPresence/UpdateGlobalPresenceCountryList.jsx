import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ThreeDotLoader from "../../../components/shared/Loaders/ThreeDotLoader";
import Cookies from "js-cookie";

const UpdateGlobalPresenceCountryList = ({ updateModalProps }) => {
  const { selectedId, countryList, refetch } = updateModalProps;
  const [isLoading, setIsLoading] = useState(false);

  const singleCountry = countryList?.find(
    (details) => details.id === selectedId
  );
  const { register, handleSubmit, reset } = useForm({
    defaultValues: singleCountry,
  });

  useEffect(() => {
    if (singleCountry) {
      reset(singleCountry);
    }
  }, [singleCountry, reset]);

  const handleUpdate = async (data) => {
    try {
      setIsLoading(true);
      const countries = data.countries.split(",");
      const trimmedCountries = countries.map((country) => country.trim());
      const body = {
        continent: data.continent,
        countries: trimmedCountries,
      };

      const res = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/global-presence/${selectedId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 200) {
        refetch();
        document.getElementById("globalPresenceCountryList").open = false;
        toast.success("Record updated successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something error occurred or change something to update!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <dialog id="globalPresenceCountryList" className="modal">
        <div className="modal-box bg-white text-black ">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Add New Country to the continent
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <form method="dialog" onSubmit={handleSubmit(handleUpdate)}>
            <div className="my-2">
              <label>
                Enter Region <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                readOnly
                className="bg-white border  rounded-md px-2 py-1 w-full"
                {...register("continent")}
              />
            </div>

            <div className="my-2">
              <label>
                Country Name<span className="text-red-600">*</span>
              </label>
              <textarea
                type="text"
                className="bg-white border rounded-md px-2 py-1 w-full"
                {...register("countries")}
              />
              <small className="text-gray-500">
                Type country name comma separated. Ex: Bangladesh, Japan
              </small>
            </div>

            <div className="flex justify-end gap-3 items-center mt-3">
              {!isLoading ? (
                <button
                  type=""
                  className="flex gap-2 btn btn-sm bg-primary text-white hover:bg-secondary hover:text-white"
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
    </div>
  );
};

export default UpdateGlobalPresenceCountryList;
