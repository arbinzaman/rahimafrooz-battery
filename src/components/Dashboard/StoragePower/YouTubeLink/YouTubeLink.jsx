import { useState } from "react";
import { useForm } from "react-hook-form";

const YouTubeLink = () => {
  const { register, handleSubmit, } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Define the API URL for adding users
//   const API_URL = `${import.meta.env.VITE_BASE_URL}/users`;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log(data);
    // try {
    //   const res = await fetch(API_URL, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (!res.ok) {
    //     throw new Error("Network response was not ok");
    //   }

    //   // const result = await res.json();
    //   toast.success("User added successfully!");
    //   reset(); // Reset form fields after successful submission
    //   navigate("/dashboard/all-users"); // Redirect to the users list
    // } catch (error) {
    //   toast.error("Failed to add user. Please try again.");
    //   console.error("Error adding user:", error);
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <section className="max-w-screen-md mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-black">
        <div>
          <label className="block text-sm font-medium mb-2">YouTube Link</label>
          <input
            type="text"
            placeholder="Paste YouTube Link Here"
            {...register("yt_Link", { required: true })}
            className="bg-gray-100 border border-gray-300 rounded-md p-2 w-full"
          />
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

export default YouTubeLink;