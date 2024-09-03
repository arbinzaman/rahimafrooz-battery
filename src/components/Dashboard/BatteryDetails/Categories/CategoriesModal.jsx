import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import CategoriesDropdown from "./CategoriesDropdown"; // Import the new component

const CategoriesModal = ({ refetch }) => {
  const { register, handleSubmit, reset } = useForm();

  // Fetch categories from the backend
  const { data: categories = [], isLoading: isFetchingCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/categories`
      );
      return res.data;
    },
  });

  // Handle form submission for adding a category
  const handleAddCategory = async (data) => {
    try {
      const newCategory = { category_name: data.category_name };
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/categories`,
        newCategory,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );
      toast.success("Category added successfully!");
      reset();
      refetch();
    } catch (error) {
      toast.error("Failed to add category.");
    }
  };

  // Handle delete category
  const handleDeleteCategory = async (categoryId) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/categories/${categoryId}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );
      toast.success("Category deleted successfully!");
      refetch();
    } catch (error) {
      toast.error("Failed to delete category.");
    }
  };

  return (
    <div>
      <dialog id="categoriesModal" className="modal">
        <div className="modal-box bg-white text-black max-w-md mx-auto my-12">
          <form method="dialog" className="flex justify-between items-center">
            <p className="font-semibold font-primary uppercase text-primary">
              Add New Category
            </p>
            <button className="btn btn-sm btn-circle btn-ghost">✕</button>
          </form>

          {/* Add Category Form */}
          <div className="my-2">
            <form
              onSubmit={handleSubmit(handleAddCategory)}
              className="flex flex-col gap-4"
            >
              <div>
                <label className="block text-black">Category Name</label>
                <input
                  required
                  placeholder="Enter category name"
                  className="border rounded-md p-2 w-full"
                  {...register("category_name")}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn btn-sm bg-sky-500 border-0 text-white hover:bg-primary hover:text-white"
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>

          {/* Custom Dropdown with Delete Feature */}
          <CategoriesDropdown
            categories={categories}
            isFetchingCategories={isFetchingCategories}
            handleDeleteCategory={handleDeleteCategory}
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
};

export default CategoriesModal;
