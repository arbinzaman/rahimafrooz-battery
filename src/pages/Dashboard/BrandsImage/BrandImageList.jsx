import { useState } from "react";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import { FaEdit } from "react-icons/fa";
import BrandImgUpdateModal from "./BrandImgUpdateModal";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
// import Loader from "../../../components/shared/Loaders/Loader";
// import toast from "react-hot-toast";
import { GrImage } from "react-icons/gr";
import BrandsData from "../../../demoData/BrandsData.json";
const BrandImageList = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [updatedData, setUpdatedData] = useState({});
  const [selectAll, setSelectAll] = useState(false);

  const allBrands = BrandsData;
  //   const url = `${import.meta.env.VITE_BASE_URL}/brands`;
  //   const queryClient = useQueryClient();

  //   const { data: allBrands = [], isLoading, error, refetch } = useQuery({
  //     queryKey: ["allBrands"],
  //     queryFn: async () => {
  //       const res = await axios.get(url);
  //       return res.data;
  //     },
  //   });

  // Handle select all
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedIds([]);
    } else {
      setSelectedIds(allBrands.map((brand) => brand.id));
    }
    setSelectAll(!selectAll);
  };

  // Handle checkbox change
  const handleCheckboxChange = (id) => {
    setSelectedIds((prevSelectedIds) => {
      const updatedSelectedIds = prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id];
      setSelectAll(updatedSelectedIds.length === allBrands.length);
      return updatedSelectedIds;
    });
  };

//   const deleteBrandsMutation = useMutation({
//     mutationFn: async (ids) => {
//       await axios.delete(url, {
//         data: { ids },
//       });
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries("allBrands");
//       setSelectedIds([]);
//       setSelectAll(false);
//     },
//   });

//   const updateBrandMutation = useMutation({
//     mutationFn: async (updatedBrand) => {
//       await axios.patch(`${url}/${updatedBrand.id}`, updatedBrand);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries("allBrands");
//     },
//   });

//   const handleDelete = () => {
//     deleteBrandsMutation.mutate(selectedIds);
//   };

//   const handleUpdate = (id, updatedData) => {
//     updateBrandMutation.mutate({ id, ...updatedData });
//   };

//   if (isLoading) {
//     return <Loader />;
//   }

//   if (error) {
//     return <div>Error fetching data</div> && toast.error("Error fetching data");
//   }

  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary flex justify-center">
        Brands <GrImage className="text-semi_large mt-2 ml-2" />
      </h1>

      <div className="flex gap-4 justify-between mb-4">
        <div className="flex gap-5">
          <Link to="/dashboard/add-a-brand">
            <button className="flex gap-2 btn btn-xs border-0 text-white bg-sky-400 hover:bg-sky-700 hover:text-white">
              Add Brand <GrImage />
            </button>
          </Link>
          <button
            className="flex gap-2 btn btn-xs bg-red-500 border-0 text-white hover:bg-red-700 hover:text-white"
            // onClick={handleDelete}
            disabled={selectedIds.length === 0}
          >
            Delete
            <MdDeleteOutline />
          </button>
        </div>
        <div>
          <button
            className="flex gap-2 btn btn-xs border-0 text-white bg-teal-400 hover:bg-teal-700 hover:text-white"
            // onClick={refetch}
          >
            Refresh
            <LuRefreshCcw />
          </button>
        </div>
      </div>

      <table className="table w-full text-black">
        <thead>
          <tr className="text-black">
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th>Serial</th>
            <th>Brand Code</th>
            <th>Image</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {allBrands.map((brand, i) => (
            <tr key={brand.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(brand.id)}
                  checked={selectedIds.includes(brand.id)}
                />
              </td>
              <td>{i + 1}</td>
              <td>{brand.brand_code}</td>
              <td>
                <img src={brand.imageurl} alt={brand.brand_code} width="100" />
              </td>
              <td>
                <button
                  className="btn btn-ghost btn-xs bg-white hover:bg-lime-500 hover:text-white"
                  onClick={() => {
                    setUpdatedData(brand);
                    setModalOpen(true);
                  }}
                >
                  <FaEdit className="text-regular" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <BrandImgUpdateModal
          updatedData={updatedData}
          dataId={updatedData.id} // Use a single ID for editing
          onClose={() => setModalOpen(false)}
          onUpdate={(updatedData) => {
            // handleUpdate(updatedData.id, updatedData); // Updated handleUpdate to accept single ID
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default BrandImageList;
