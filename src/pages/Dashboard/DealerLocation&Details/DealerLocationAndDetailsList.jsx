import { useState } from "react";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import DealerLocationAndDetaills from "../../../demoData/DealerLocationAndDetaills.json";
import { toast } from "react-hot-toast";
import { TbPencilQuestion } from "react-icons/tb";
import { RiUserLocationFill, RiUserLocationLine } from "react-icons/ri";
import UpdateDealerLocationAndDetails from "./UpdateDealerLocationAndDetails";

const DealerLocationAndDetailsList = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [updatedData, setUpdatedData] = useState({});
//   const [loading, setLoading] = useState(false);

  const DealerLocationAndDetailsList = DealerLocationAndDetaills;

  const handleCheckboxChange = (id) => {
    setSelectedIds((prevSelectedIds) => {
      const isSelected = prevSelectedIds.includes(id);
      const updatedSelectedIds = isSelected
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id];
      
      setSelectAll(updatedSelectedIds.length === DealerLocationAndDetailsList.length);
      return updatedSelectedIds;
    });
  };

  const handleSelectAllChange = () => {
    const allIds = DealerLocationAndDetailsList.map((faq) => faq.id);

    if (selectAll) {
      setSelectedIds([]);
    } else {
      setSelectedIds(allIds);
    }

    setSelectAll(!selectAll);
  };

  const handleDelete = async () => {
    try {
      await Promise.all(
        selectedIds.map(id =>
          fetch(`${import.meta.env.VITE_BASE_URL}/faqs/${id}`, {
            method: "DELETE",
          }).then(res => {
            if (!res.ok) {
              throw new Error("Failed to delete");
            }
          })
        )
      );
      setSelectedIds([]);
      setSelectAll(false);
      toast.success("Selected FAQs deleted successfully!");
    } catch (error) {
      toast.error("Error deleting selected FAQs.");
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/faqs/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      toast.success("FAQ updated successfully!");
    } catch (error) {
      toast.error("Error updating FAQ.");
    }
  };
//   console.log("Selected IDs:", selectedIds);
// console.log("Select All:", selectAll);


  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary flex justify-center">
        Dealer Location & Details <RiUserLocationLine className="text-semi_large mt-2 ml-2" />
      </h1>

      <div className="flex gap-4 justify-between mb-4">
        <div className="flex gap-5">
          <Link to="/dashboard/add-a-dealer-location-and-details">
            <button className="flex gap-2 btn btn-xs  border-0 text-white bg-sky-400 hover:bg-sky-700 hover:text-white">
              Add Dealer Details and Location <RiUserLocationFill  />
            </button>
          </Link>
          <button
            className="flex gap-2 btn btn-xs bg-red-500 border-0 text-white hover:bg-red-700 hover:text-white"
            onClick={handleDelete}
          >
            Delete
            <MdDeleteOutline />
          </button>
        </div>
        <div>
          <button
            className="flex gap-2 btn btn-xs  border-0 text-white bg-teal-400 hover:bg-teal-700 hover:text-white"
            // Implement refresh logic if needed
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
                onChange={handleSelectAllChange}
                checked={selectAll}
                className="bg-white border-0"
              />
            </th>
            <th>Serial</th>
            <th>Shop Name</th>
            <th>Address</th>
            <th>Proprietor Name</th>
            <th>Phone Numbers</th>
            <th>Email</th>
            <th>Google Map Coordinates</th>
            <th>Division</th>
            <th>District</th>
            <th>Thana</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {DealerLocationAndDetailsList.map((dealerLocationDetail, i) => (
            <tr key={dealerLocationDetail.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(dealerLocationDetail.id)}
                  checked={selectedIds.includes(dealerLocationDetail.id)}
                />
              </td>
              <td>{i + 1}</td>
              <td>{dealerLocationDetail.shop_name}</td>
              <td>{dealerLocationDetail.address}</td>
              <td>{dealerLocationDetail.proprietor_name}</td>
              <td>{dealerLocationDetail.phone_numbers}</td>
              <td>{dealerLocationDetail.email}</td>
              <td>{dealerLocationDetail.coordinates}</td>
              <td>{dealerLocationDetail.division}</td>
              <td>{dealerLocationDetail.district}</td>
              <td>{dealerLocationDetail.thana}</td>
              <td>
                <button
                  className="btn btn-ghost btn-xs bg-white hover:bg-lime-500 hover:text-white"
                  onClick={() => {
                    setUpdatedData(dealerLocationDetail);
                    setModalOpen(true);
                  }}
                >
                  <TbPencilQuestion  className="text-regular" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && (
        <UpdateDealerLocationAndDetails
          updatedData={updatedData}
          dataId={updatedData.id}
          onClose={() => setModalOpen(false)}
          onUpdate={(updatedData) => {
            handleUpdate(updatedData.id, updatedData);
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default DealerLocationAndDetailsList;
