import { MdDeleteOutline, MdEdit, MdOutlineDoneOutline } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import WarrantyServiceUpdateModal from "./WarrantyServiceUpdateModal";
import WarrantyStatusModal from "./WarrantyStatusModal";

const WarrantyServiceList = ({ prompts }) => {
  const [selectedId, setSelectedId] = useState();
  const { allWarrantyDetails, refetch } = prompts;

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/contact/global-locations/${id}`
      );

      if (res.status === 200) {
        toast.success("Successfully deleted!");
        refetch();
      }
    } catch (error) {
      console.error("Error updating location:", error);
      toast.error("Please try again!");
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full text-black">
        <thead>
          <tr className="text-black">
            <th>Serial</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Serial Number</th>
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
          {allWarrantyDetails?.map((warranty, i) => (
            <tr key={warranty.id}>
              <th>{i + 1}</th>
              <td>{warranty.name}</td>
              <td>{warranty.email}</td>
              <td>{warranty.phoneNumber}</td>
              <td>{warranty.purchaseDLR}</td>
              <td>{warranty.serialNumber}</td>
              <td>{warranty.purchaseDate}</td>
              <td>{warranty.vehicleType}</td>
              <td>{warranty.totalWarranty} Month</td>
              <td>{warranty.warrantyDeadline}</td>
              <td
                className={
                  warranty.approvalStatus ? "text-primary" : "text-red-500"
                }
              >
                {warranty.approvalStatus ? "Approved" : "Not Approved"}
              </td>
      
              <td>
                <button
                  title="Edit warranty"
                  className="btn btn-xs bg-white hover:text-white border-none"
                  onClick={() => {
                    document.getElementById("warrantyServiceModal").open = true;
                    setSelectedId(warranty.id);
                  }}
                >
                  <MdEdit className="text-regular text-primary" />
                </button>
                <WarrantyServiceUpdateModal
                  updateModalProps={{ allWarrantyDetails, selectedId, refetch }}
                />
              </td>
              <td>
                <button
                  title="Update warranty"
                  className="btn btn-xs bg-white hover:text-white border-none"
                  onClick={() => {
                    document.getElementById("warrantyStatusModal").open = true;
                    setSelectedId(warranty.id);
                  }}
                >
                  <MdOutlineDoneOutline className="text-regular text-primary" />
                </button>
                <WarrantyStatusModal
                  updateModalProps={{ allWarrantyDetails, selectedId, refetch }}
                />
              </td>

              <td>
                <button
                  className="btn btn-xs bg-red-500 border-none text-white hover:bg-red-700 hover:text-white"
                  onClick={() => handleDelete(warranty.id)}
                >
                  <MdDeleteOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WarrantyServiceList;
