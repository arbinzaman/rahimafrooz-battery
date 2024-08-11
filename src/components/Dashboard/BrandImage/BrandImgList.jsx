import { MdDeleteForever } from "react-icons/md";
import FetchErrorMessage from "../../shared/Error/FetchErrorMessage";
import axios from "axios";
import toast from "react-hot-toast";
import { TbPencilQuestion } from "react-icons/tb";
import UpdateBrandImgModal from "./UpdateBrandImgModal";
import { useState } from "react";

const BrandImgList = ({ prompts }) => {
  const { brandImgs, refetch } = prompts;
  const [selectedId, setSelectedId] = useState();

  const handleDelete = async (id) => {
    try {
      const body = brandImgs.find((details) => details.id === id);
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/brands/${id}`,
        { data: body }
      );

      if (res.status === 200) {
        refetch();
        toast.success("Record deleted successfully");
      }
    } catch (error) {
      toast.error("Something error occurred!");
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        {brandImgs === null ? (
          <FetchErrorMessage />
        ) : (
          <table className="table w-full text-black">
            <thead>
              <tr className="text-black">
                <th>Serial</th>
                <th>Brand</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {brandImgs.map((details, i) => (
                <tr key={details.id}>
                  <th>{i + 1}</th>
                  <td>{details.brand_name}</td>
                  <td>
                    <img
                      src={details.image_url}
                      alt={details.brand_name+" product image"}
                      className="w-52"
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost btn-xs bg-white hover:bg-lime-500 hover:text-white"
                      onClick={() => {
                        setSelectedId(details.id);
                        document.getElementById("updateBrand").open = true;
                      }}
                    >
                      <TbPencilQuestion className="text-regular" />
                    </button>
                    <UpdateBrandImgModal
                      updateModalProps={{ selectedId, brandImgs, refetch }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-xs border-0 bg-red-400"
                      onClick={() => handleDelete(details.id)}
                    >
                      <MdDeleteForever className="text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BrandImgList;
