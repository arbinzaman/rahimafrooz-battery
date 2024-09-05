import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineGlobal } from "react-icons/ai";
import ThreeDotLoader from "../../../components/shared/Loaders/ThreeDotLoader";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const AddAGlobalPresenceCountry = ({ props }) => {
  const { refetch } = props;
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const handleAddData = async (data) => {
    try {
      setIsLoading(true);
      const countries = data.countries.split(",");
      const trimmedCountries = countries.map((country) => country.trim());
      const body = {
        continent: data.continent,
        countries: trimmedCountries,
      };

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/global-presence`,
        body,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 201) {
        reset();
        document.getElementById("AddCountry").open = false;
        refetch();
        toast.success("New global location added successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something error occurred!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <dialog id="AddCountry" className="modal">
        <div className="modal-box bg-white text-black ">
          <form method="dialog" className="flex justify-between items-center">
            <p className="text-primary text-medium font-bold flex gap-2 my-2">
              Add Global Presence Country <AiOutlineGlobal className="mt-1" />
            </p>
            <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
          </form>
          <form method="dialog" onSubmit={handleSubmit(handleAddData)}>
            <div className="my-2">
              <label>
                Continent <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                className="bg-white border  rounded-md px-2 py-1 w-full"
                {...register("continent")}
              />
            </div>

            <div className="my-2">
              <label>
                Country <span className="text-red-600">*</span>
              </label>
              <input
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
                  Add
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

export default AddAGlobalPresenceCountry;
