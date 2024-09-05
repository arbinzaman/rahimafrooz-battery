/* eslint-disable no-useless-escape */
import { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AiOutlineSave } from "react-icons/ai";
import { useUser } from "../../../contexts/AuthContext";
import toast from "react-hot-toast";
import Loader from "../../shared/Loaders/Loader";
import Cookies from "js-cookie";

const UpdatePassword = () => {
  const { user, logout } = useUser();
  const [loading, setLoading] = useState(false);
  const [regexErrors, setRegexErrors] = useState({
    digit: "Password must contain at least one digit.",
    lower: "Password must contain at least one lowercase letter.",
    upper: "Password must contain at least one uppercase letter.",
    length: "Password must be at least 8 characters long.",
    char: "Password must contain at least one special character.",
  });
  const [newPass, setNewPass] = useState("");
  const [isMatched, setIsMatched] = useState(false);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const handleNewPasswordChange = (event) => {
    const newPasswordValue = event.target.value;
    setNewPass(newPasswordValue);

    // Check if the new password matches each regex validation
    const digitRegex = /\d/;
    const lowerRegex = /[a-z]/;
    const upperRegex = /[A-Z]/;
    const lengthRegex = /^.{8,}$/;
    const charRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let newPasswordErrors = { ...regexErrors };

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

    setRegexErrors(newPasswordErrors);
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    if (confirmPassword === newPass) {
      setIsMatched(true);
    } else {
      setIsMatched(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const form = event.target;
    const password = form.password.value;
    const newPassword = form.newPassword.value;
    const confirmNewPassword = form.confirmNewPassword.value;

    if (newPassword !== confirmNewPassword) {
      setLoading(false);
      return;
    }

    if (
      regexErrors.digit ||
      regexErrors.char ||
      regexErrors.length ||
      regexErrors.lower ||
      regexErrors.upper
    ) {
      setLoading(false);
      return;
    }

    const UpdatePasswordData = {
      password: password,
      newPassword: newPassword,
    };

    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_BASE_URL}/users/update-password/${user.email}`,
        UpdatePasswordData,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (response.status === 200) {
        toast.success(response.data);
        logout();
      } else {
        toast.error(response.data);
      }
    } catch (error) {
      toast.error(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <Loader />;

  return (
    <section className="pt-16 w-full sm:px-6 lg:px-20">
      <div className="w-full mx-auto">
        <div className="relative bg-white flex flex-col sm:flex-row items-start sm:items-center w-full mb-6 shadow-xl rounded-lg">
          <div className="px-6 w-full">
            <h2 className="text-2xl font-semibold text-primary mb-4 mt-10">
              Update Password
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Old Pass */}
              <div className="relative mb-6">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-black pb-1"
                >
                  Current Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword.current ? "text" : "password"}
                  className="peer w-full bg-white border border-gray-400 rounded-md px-3 py-2 text-black placeholder-transparent focus:outline-none"
                  required
                    //  className="absolute left-3 top-2 text-sm text-gray-500 transition-transform duration-300 transform -translate-y-1/2 scale-75 origin-top-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-gray-400 peer-focus:-translate-y-4 peer-focus:text-xs peer-focus:text-gray-600 peer-focus:scale-75"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => ({
                      ...prev,
                      current: !prev.current,
                    }))
                  }
                  className="absolute right-3 top-9"
                >
                  {showPassword.current ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}
                </button>
              </div>

              {/* New Pass */}
              <div className="relative mb-6">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-black pb-1"
                >
                  New Password
                </label>
                <input
                  id="newPassword"
                  name="newPassword"
                  type={showPassword.new ? "text" : "password"}
                  onPaste={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  onChange={handleNewPasswordChange}
                  className="peer w-full bg-white border border-gray-400 rounded-md px-3 py-2 text-black placeholder-transparent focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => ({ ...prev, new: !prev.new }))
                  }
                  className="absolute right-3 top-9"
                >
                  {showPassword.new ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}
                </button>
                {regexErrors && (
                  <ul className="pl-1 pt-1">
                    <li className="text-xs text-red-500">
                      {regexErrors.lower}
                    </li>
                    <li className="text-xs text-red-500">
                      {regexErrors.upper}
                    </li>
                    <li className="text-xs text-red-500">{regexErrors.char}</li>
                    <li className="text-xs text-red-500">
                      {regexErrors.digit}
                    </li>
                    <li className="text-xs text-red-500">
                      {regexErrors.length}
                    </li>
                  </ul>
                )}
              </div>

              {/* Confirm Pass */}
              <div className="relative mb-6">
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-black pb-1"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  type={showPassword.confirm ? "text" : "password"}
                  onPaste={(e) => {
                    e.preventDefault();
                    return false;
                  }}
                  className={
                    isMatched
                      ? "border border-green-400 peer w-full bg-white rounded-md px-3 py-2 text-black placeholder-transparent focus:outline-none"
                      : "border border-red-400 peer w-full bg-white rounded-md px-3 py-2 text-black placeholder-transparent focus:outline-none"
                  }
                  onChange={handleConfirmPasswordChange}
                  required
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => ({
                      ...prev,
                      confirm: !prev.confirm,
                    }))
                  }
                  className="absolute right-3 top-9"
                >
                  {showPassword.confirm ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}
                </button>
              </div>
              <div className="flex justify-end gap-3 items-center mt-4 pb-5">
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
