import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { GrDocumentUpdate } from "react-icons/gr";
import axios from "axios";
import Cookies from "js-cookie";

const AddAUser = ({ addModalProps }) => {
  const { register, handleSubmit, reset } = useForm();
  const { refetch } = addModalProps;
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Define the API URL for adding users
  const API_URL = `${import.meta.env.VITE_BASE_URL}/users`;

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);
      const res = await axios.post(API_URL, data, {
        headers: {
          Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
        },
      });

      if (res.status === 201) {
        reset();
        document.getElementById("addUser").open = false;
        refetch();
        toast.success("User added successfully");
      }
    } catch (error) {
      toast.error("Failed to add user. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <dialog id="addUser" className="modal">
      <div className="modal-box bg-white text-black">
        <form method="dialog" className="flex justify-between items-center">
          <p className="text-primary text-medium font-bold flex gap-2 my-2">
            Add A User
          </p>
          <button className="btn btn-sm btn-circle btn-ghost ">✕</button>
        </form>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: true })}
              className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Employee ID
            </label>
            <input
              type="text"
              placeholder="Employee ID"
              {...register("emp_id", { required: true })}
              className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Role</label>
            <select
              {...register("role", { required: true })}
              className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Super Admin">Super Admin</option>
            </select>
          </div>

          <div className="flex justify-end gap-4">
            {/* <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white  rounded-md btn-sm hover:bg-red-700"
            >
              Cancel
            </button> */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-500 text-white  py-2 rounded-md flex  btn-sm hover:bg-green-700 "
            >
              <GrDocumentUpdate className="mr-2 mt-1" />{" "}
              {isSubmitting ? "Adding..." : "Add User"}
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default AddAUser;
