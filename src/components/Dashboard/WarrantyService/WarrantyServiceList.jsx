import { MdDeleteOutline, MdEdit, MdOutlineDoneOutline } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import WarrantyServiceUpdateModal from "./WarrantyServiceUpdateModal";
import WarrantyStatusModal from "./WarrantyStatusModal";
import Cookies from "js-cookie";

const WarrantyServiceList = ({ prompts }) => {
  const { allWarrantyDetails, refetch } = prompts;
  const [selectedId, setSelectedId] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10); // Number of items per page

  const openDeleteModal = (id) => {
    setSelectedId(id);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedId(null);
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/warranty-services/${id}`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 200) {
        closeDeleteModal();
        refetch();
        toast.success("Successfully deleted!");
      }
    } catch (error) {
      console.error("Error updating location:", error);
      toast.error("Please try again!");
    }
  };

  // Pagination calculations
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = allWarrantyDetails?.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="overflow-x-auto xl:overflow-hidden">
      <table className="table w-full text-black">
        <thead>
          <tr className="text-black">
            <th>Serial</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Product Short Code</th>
            <th>Purchase DLR</th>
            <th>Purchase Date</th>
            <th>Vehicle Type</th>
            <th>Total Warranty</th>
            <th>Warranty Deadline</th>
            <th>Approval Status</th>
            <th>Edit</th>
            <th>Approve</th>
            <th>Decline</th>
          </tr>
        </thead>
        <tbody>
          {currentData && currentData.map((warranty, i) => (
            <tr key={warranty?.id}>
              <th>{indexOfFirstData + i + 1}</th>
              <td>{warranty?.name}</td>
              <td>{warranty?.email}</td>
              <td>{warranty?.phone_number}</td>
              <td>{warranty?.short_code}</td>
              <td>{warranty?.purchase_dlr}</td>
              <td>{warranty?.purchase_date?.split('T')[0]}</td>
              <td>{warranty?.vehicle_type}</td>
              <td>
                {warranty?.total_warranty
                  ? warranty?.total_warranty + " Months"
                  : "Not Provided"}
              </td>
              <td>
                {warranty?.warranty_deadline
                  ? warranty?.warranty_deadline?.split('T')[0]
                  : "Not Provided"}
              </td>
              <td
                className={
                  warranty?.approval_status ? "text-primary" : "text-red-500"
                }
              >
                {warranty?.approval_status ? "Approved" : "Not Approved"}
              </td>

              {warranty?.approval_status === true ? (
                <td>
                  <button
                    title="Edit warranty"
                    className="btn btn-xs bg-white hover:text-white border-none"
                    onClick={() => {
                      document.getElementById(
                        "warrantyServiceModal"
                      ).open = true;
                      setSelectedId(warranty?.id);
                    }}
                  >
                    <MdEdit className="text-regular text-primary" />
                  </button>
                  <WarrantyServiceUpdateModal
                    updateModalProps={{
                      allWarrantyDetails,
                      selectedId,
                      refetch,
                    }}
                  />
                </td>
              ) : (
                <td></td>
              )}
              {warranty?.approval_status === true ? (
                <td></td>
              ) : (
                <td>
                  <button
                    title="Update warranty"
                    className="btn btn-xs bg-white hover:text-white border-none"
                    onClick={() => {
                      document.getElementById(
                        "warrantyStatusModal"
                      ).open = true;
                      setSelectedId(warranty?.id);
                    }}
                  >
                    <MdOutlineDoneOutline className="text-regular text-primary" />
                  </button>
                  <WarrantyStatusModal
                    updateModalProps={{
                      allWarrantyDetails,
                      selectedId,
                      refetch,
                    }}
                  />
                </td>
              )}

              <td>
                <button
                  className="btn btn-xs bg-red-500 border-none text-white hover:bg-red-700 hover:text-white"
                  onClick={() => openDeleteModal(warranty?.id)}
                >
                  <MdDeleteOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      {allWarrantyDetails && allWarrantyDetails.length > dataPerPage && (
        <div className="flex justify-center mt-4">
          <div className="join">
            {[
              ...Array(Math.ceil(allWarrantyDetails.length / dataPerPage)).keys(),
            ].map((number) => (
              <input
                key={number}
                className="join-item btn btn-ghost btn-sm bg-primary text-white border-white active:bg-gray-400 checked:bg-gray-400"
                type="radio"
                name="options"
                aria-label={number + 1}
                checked={currentPage === number + 1}
                onChange={() => paginate(number + 1)}
              />
            ))}
          </div>
        </div>
      )}
      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white text-red-500">
            <h2 className="text-lg ">
              Do you want to remove this warranty information?
            </h2>
            <div className="modal-action">
              <button
                className="btn bg-red-500 text-white border-0 btn-ghost  btn-xs hover:bg-red-700 hover:text-white"
                onClick={() => handleDelete(selectedId)}
              >
                Yes, Remove
              </button>
              <button
                className="btn  text-red-500 border-0  btn-ghost  btn-xs bg-gray-200"
                onClick={closeDeleteModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default WarrantyServiceList;
