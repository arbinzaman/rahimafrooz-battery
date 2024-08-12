import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const ForgotPass = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleForgotPassword = async (event) => {
    try {
      setIsLoading(true);
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;

      const API_URL = `${import.meta.env.VITE_BASE_URL}/auth/${email}`;
      const res = await axios.patch(API_URL);
      if (res.status === 200) {
        toast.success("An email sent to provided address");
        navigate("/admin-login");
      }
    } catch (error) {
      toast.error("Please provide a registered email address");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
        <form onSubmit={handleForgotPassword} noValidate className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md border border-gray-300 text-gray-800 focus:border-primary focus:outline-none bg-white"
            />
            <small className="text-gray-400 ml-2">
              Please provide registered email.
            </small>
          </div>

          {!isLoading ? (
            <button
              type="submit"
              disabled={isLoading ? true : false}
              className={
                "block w-full p-3 text-center rounded-sm text-white bg-primary hover:bg-secondary"
              }
            >
              Send Mail
            </button>
          ) : (
            <button className="flex justify-center items-center w-full p-3 text-center rounded-sm text-white bg-background">
              <ThreeDots
                visible={true}
                height="30"
                width="30"
                color="#0d72b9"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPass;
