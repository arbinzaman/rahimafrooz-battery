import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineSave } from "react-icons/ai";
import { useUser } from "../../../contexts/AuthContext";
import Loader from "../../shared/Loaders/Loader";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UserBasicInfo = () => {
  const { user } = useUser();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: user,
  });

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  const handleUpdateBasics = async (data) => {
    try {
      setIsLoading(true);

      const res = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/users/update-username/${user?.email}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 200) {
        toast.success(res.data + "\n Login to see changes");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) return <Loader />;

  return (
    <section className="pt-16 w-full  sm:px-6 lg:px-20">
      <div className="w-full mx-auto">
        <div className="relative bg-white flex flex-col sm:flex-row items-start sm:items-center w-full mb-6 shadow-xl rounded-lg">
          <div className="px-6 w-full">
            <h2 className="text-2xl font-semibold text-primary mb-4 mt-10">
              Update Basic Info
            </h2>
            <form
              onSubmit={handleSubmit(handleUpdateBasics)}
              className="space-y-4"
            >
              {error && <div className="text-red-500 mb-4">{error}</div>}

              <div className="mb-4">
                <label className="block text-sm font-medium text-black">
                  Username
                </label>
                <input
                  onChange={handleUpdateBasics}
                  type="text"
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-black"
                  required
                  {...register("username")}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-black">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-black"
                  readOnly
                  {...register("email")}
                />
              </div>

              <div className="flex justify-end gap-3 items-center mt-4 pb-5">
                <button
                  type="submit"
                  className={`flex gap-2 items-center btn btn-sm ${
                    isLoading ? "bg-gray-400" : "bg-green-500"
                  } text-white border-none hover:bg-emerald-300`}
                  disabled={isLoading}
                >
                  <AiOutlineSave className="text-sm" />{" "}
                  {isLoading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserBasicInfo;
