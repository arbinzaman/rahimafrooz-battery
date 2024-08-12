import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { GrDocumentUpdate } from "react-icons/gr";
import { useUser } from "../../../contexts/AuthContext";
import Cookies from "js-cookie";
import axios from "axios";

const UserUpdateModal = ({ user, onClose, onUpdate }) => {
  const { user: currentUser } = useUser();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: user,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Define the API URL for updating users
  const API_URL = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;

  // Handle form submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await axios.patch(API_URL, data, {
        headers: {
          authorization: `Bearer ${Cookies.get("XTOKEN")}`,
        },
      });

      if (res.status === 200) {
        onUpdate();
        onClose();
        toast.success("User updated successfully!");
      }
    } catch (error) {
      toast.error("Failed to update user. Please try again.");
      console.error("Error updating user:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    reset(user);
  }, [user, reset]);

  return (
    <div className="modal modal-open">
      <div className="modal-box bg-white text-black">
        <h2 className="text-lg font-bold mb-4">Update User</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Username</label>
            <input
              type="text"
              placeholder="Username"
              {...register("username")}
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
              disabled
              {...register("emp_id")}
              className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              disabled
              placeholder="Email"
              {...register("email")}
              className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Role</label>
            <select
              {...register("role")}
              disabled={currentUser.role !== "Super Admin"} // Disable if not Super Admin
              className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Super Admin">Super Admin</option>
            </select>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white rounded-md btn-sm hover:bg-red-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-500 text-white py-2 rounded-md flex btn-sm hover:bg-green-700"
            >
              <GrDocumentUpdate className="mr-2 mt-1" />
              {isSubmitting ? "Updating..." : "Update User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserUpdateModal;
