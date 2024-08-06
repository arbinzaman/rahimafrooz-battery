import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineSave } from "react-icons/ai";
import { useUser } from "../../../contexts/AuthContext";
import Loader from "../../shared/Loaders/Loader";
import Cookies from "js-cookie";

const UserBasicInfo = () => {
  const { user } = useUser(); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    phone: user?.phone || ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/users/${user?.id}`, // Adjust endpoint as necessary
        formData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('XTOKEN')}`
          }
        }
      );

      if (res.status === 200) {
        navigate("/user/profile"); // Redirect after successful submission
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) return <Loader />; 

  return (
    <section className="pt-16 w-full px-4 sm:px-6 lg:px-20">
      <div className="w-full mx-auto">
        <div className="relative bg-white flex flex-col sm:flex-row items-start sm:items-center w-full mb-6 shadow-xl rounded-lg">
          <div className="px-6 w-full">
            <h2 className="text-2xl font-semibold text-primary mb-4 mt-10">Update Basic Info</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <div className="text-red-500 mb-4">{error}</div>}
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-black">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-black"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-black">Email</label>
                <input
                  type="email"
                  name="email"
                  disabled
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-black"
                  required
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
                  <AiOutlineSave className="text-sm" /> {isLoading ? "Saving..." : "Save"}
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
