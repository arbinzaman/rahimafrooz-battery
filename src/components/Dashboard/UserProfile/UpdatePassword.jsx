/* eslint-disable no-useless-escape */
import { useState } from "react";
import axios from "axios";
import {
  FaEye,
  FaEyeSlash,
  // FaUserAlt
} from "react-icons/fa";
import { AiOutlineSave } from "react-icons/ai";
import { useUser } from "../../../contexts/AuthContext";
import toast from "react-hot-toast";
import Loader from "../../shared/Loaders/Loader";
import Cookies from "js-cookie";

const UpdatePassword = () => {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({
    digit: "",
    lower: "",
    upper: "",
    length: "",
    char: "",
  });
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleNewPasswordChange = (event) => {
    const newPasswordValue = event.target.value;

    // Check if the new password matches each regex validation
    const digitRegex = /\d/;
    const lowerRegex = /[a-z]/;
    const upperRegex = /[A-Z]/;
    const lengthRegex = /^.{8,}$/;
    const charRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let newPasswordErrors = { ...errors };

    newPasswordErrors.digit = digitRegex.test(newPasswordValue)
      ? ""
      : "Password must contain at least one digit.";
    newPasswordErrors.lower = lowerRegex.test(newPasswordValue)
      ? ""
      : "Password must contain at least one lowercase letter.";
    newPasswordErrors.upper = upperRegex.test(newPasswordValue)
      ? ""
      : "Password must contain at least one uppercase letter.";
    newPasswordErrors.length = lengthRegex.test(newPasswordValue)
      ? ""
      : "Password must be at least 8 characters long.";
    newPasswordErrors.char = charRegex.test(newPasswordValue)
      ? ""
      : "Password must contain at least one special character.";

    setErrors(newPasswordErrors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const form = event.target;
    const password = form.password.value;
    const newPassword = form.newPassword.value;
    const confirmNewPassword = form.confirmNewPassword.value;

    if (newPassword !== confirmNewPassword) {
      setError("Password didn't match");
      setLoading(false);
      return;
    }

    if (
      errors.digit ||
      errors.char ||
      errors.length ||
      errors.lower ||
      errors.upper
    ) {
      setLoading(false);
      return;
    }

    const UpdatePasswordData = {
      password: password,
      newPassword: newPassword,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/update-password`, // Adjust endpoint as necessary
        UpdatePasswordData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`, // Use token from cookies
          },
        }
      );

      if (response.data.status === "success") {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.error);
      }
      form.reset();
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <Loader />;

  return (
    <section className="pt-16 w-full px-4 sm:px-6 lg:px-20">
      <div className="w-full mx-auto">
        <div className="relative bg-white flex flex-col sm:flex-row items-start sm:items-center w-full mb-6 shadow-xl rounded-lg">
          <div className="px-6 w-full">
            <h2 className="text-2xl font-semibold text-primary mb-4 mt-10">
              Update Password
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <div className="text-red-500 mb-4">{error}</div>}

              <div className="relative mb-4">
                <input
                  id="password"
                  type={showPassword.current ? "text" : "password"}
                  className="peer w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-black placeholder-transparent"
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute top-2 left-3 text-sm text-gray-500 transition-transform duration-300 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-medium peer-placeholder-shown:scale-100 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-600 peer-focus:scale-75"
                >
                  Current Password:
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => ({
                      ...prev,
                      current: !prev.current,
                    }))
                  }
                  className="absolute right-3 top-2"
                >
                  {showPassword.current ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}
                </button>
              </div>

              <div className="relative mb-4">
                <input
                  id="newPassword"
                  type={showPassword.new ? "text" : "password"}
                  onChange={handleNewPasswordChange}
                  className="peer w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-black placeholder-transparent"
                  required
                />
                <label
                  htmlFor="newPassword"
                  className="absolute top-2 left-3 text-sm text-gray-500 transition-transform duration-300 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-medium peer-placeholder-shown:scale-100 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-600 peer-focus:scale-75"
                >
                  New Password:
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => ({ ...prev, new: !prev.new }))
                  }
                  className="absolute right-3 top-2"
                >
                  {showPassword.new ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}
                </button>
              </div>

              <div className="relative mb-4">
                <input
                  id="confirmNewPassword"
                  type={showPassword.confirm ? "text" : "password"}
                  className="peer w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-black placeholder-transparent"
                  required
                />
                <label
                  htmlFor="confirmNewPassword"
                  className="absolute top-2 left-3 text-sm text-gray-500 transition-transform duration-300 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:font-medium peer-placeholder-shown:scale-100 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gray-600 peer-focus:scale-75"
                >
                  Confirm Password:
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => ({
                      ...prev,
                      confirm: !prev.confirm,
                    }))
                  }
                  className="absolute right-3 top-2"
                >
                  {showPassword.confirm ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}
                </button>
              </div>

              <div className="flex justify-end gap-3 items-center mt-4 pb-5">
                {/* <button
                  type="button"
                  className="flex gap-2 items-center btn btn-sm bg-teal-500 text-white border-none hover:bg-teal-700"
                  onClick={() => window.history.back()}
                >
                  <FaUserAlt className="text-sm" /> Back
                </button> */}
                <button
                  type="submit"
                  className={`flex gap-2 items-center btn btn-sm ${
                    loading ? "bg-gray-400" : "bg-green-500"
                  } text-white border-none hover:bg-emerald-300`}
                  disabled={loading}
                >
                  <AiOutlineSave className="text-sm" />{" "}
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdatePassword;
