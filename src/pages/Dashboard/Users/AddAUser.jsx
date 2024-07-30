import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const AddAUser = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Define the API URL for adding users
  const API_URL = `${import.meta.env.VITE_BASE_URL}/users`;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      // const result = await res.json();
      toast.success("User added successfully!");
      reset(); // Reset form fields after successful submission
      navigate("/dashboard/all-users"); // Redirect to the users list
    } catch (error) {
      toast.error("Failed to add user. Please try again.");
      console.error("Error adding user:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-screen-md mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-6 text-primary">Add New User</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-black">
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
            <option value="Super Admin">Super Admin</option>
          </select>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            {isSubmitting ? "Submitting..." : "Add User"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddAUser;
