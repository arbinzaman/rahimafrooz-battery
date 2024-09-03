import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import ThreeDotLoader from "../../../shared/Loaders/ThreeDotLoader";
    
const CategoriesDropdown = ({
  categories,
  isFetchingCategories,
  handleDeleteCategory,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative my-4">
      <h2 className="text-lg font-semibold mb-2">Categories</h2>    
      <div className="relative">
        <button
          className="btn btn-sm border bg-gray-200 p-2 rounded-lg w-full text-left"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          Select Category
        </button>

        {dropdownOpen && (
          <div className="absolute z-10 bg-white border border-gray-200 w-full max-h-48 overflow-y-auto mt-1 rounded-md shadow-lg">
            {isFetchingCategories ? (
              <div className="flex justify-center p-2">
                <ThreeDotLoader />
              </div>
            ) : (
              categories.map((category) => (
                <div
                  key={category.category_id}
                  className="flex justify-between items-center px-3 py-2 hover:bg-gray-100"
                >
                  <span>{category.category_name}</span>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDeleteCategory(category.category_id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesDropdown;
