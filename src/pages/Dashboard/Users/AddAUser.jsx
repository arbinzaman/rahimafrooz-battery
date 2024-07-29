import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UserUpdateModal = ({ user, onClose, onUpdate }) => {
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
      const res = await fetch(API_URL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      toast.success("User updated successfully!");
      onUpdate(); // Refresh the user list
      onClose(); // Close the modal
    } catch (error) {
      toast.error("Failed to update user. Please try again.");
      console.error("Error updating user:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form when user prop changes
  useEffect(() => {
    reset(user);
  }, [user, reset]);

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h2 className="text-lg font-bold mb-4">Update User</h2>
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
            <label className="block text-sm font-medium mb-2">Employee ID</label>
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
              <option value="User">User</option>
              <option value="Super Admin">Super Admin</option>
            </select>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              {isSubmitting ? "Updating..." : "Update User"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserUpdateModal;
