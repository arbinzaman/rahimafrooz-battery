import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import { toast } from "react-hot-toast";
import { TbPencilQuestion } from "react-icons/tb";
import { RiUserLocationFill } from "react-icons/ri";
import UpdateDealerLocationAndDetails from "./UpdateDealerLocationAndDetails";
import AddADealerDetailsModal from "./AddADealerDetailsModal";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

const DealerLocationAndDetailsList = () => {
  const [selectedId, setSelectedId] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const { data: allDealersDetails = null, refetch } = useQuery({
    queryKey: ["allDealersDetails"],
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/dealer-details`
      );
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  const handleDelete = async (id) => {
    try {
      const dealer = allDealersDetails.find((item) => item.id === id);
      console.log(id, dealer);
      const response = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/dealer-details/${id}`,
        {
          data: dealer,
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (response.status === 200) {
        setDeleteModalOpen(false);
        refetch();
        toast.success("Records deleted successfully.");
      }
    } catch (error) {
      refetch();
      toast.error("Records failed to delete!");
    }
  };

  const openModal = () => {
    document.getElementById("my_modal_69").open = true;
  };

  const openUpdateModal = () => {
    document.getElementById("dealer_details_update").open = true;
  };

  const openDeleteModal = (id) => {
    setSelectedId(id);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedId(null);
  };

  return (
    <div className="overflow-x-auto">
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        Dealer location and details
      </h1>
      <div className="flex gap-4 justify-between mb-4">
        <div className="flex gap-5">
          <button
            className="flex gap-2 btn btn-xs border-0 text-white bg-sky-400 hover:bg-sky-700 hover:text-white"
            onClick={openModal}
          >
            Add Dealer Details and Location <RiUserLocationFill />
          </button>
          <AddADealerDetailsModal addModalProps={{ refetch }} />
        </div>
        <div>
          <button
            className="flex gap-2 btn btn-xs border-0 text-white bg-teal-400 hover:bg-teal-700 hover:text-white"
            onClick={refetch}
          >
            Refresh
            <LuRefreshCcw />
          </button>
        </div>
      </div>

      <table className="table w-full text-black">
        <thead>
          <tr className="text-black">
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
            <th>Image</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {allDealersDetails &&
            allDealersDetails.map((dealerLocationDetail, i) => (
              <tr key={dealerLocationDetail.id}>
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
                  {dealerLocationDetail.image_url ? (
                    <img
                      src={dealerLocationDetail.image_url}
                      alt="Dealer's shop image"
                    />
                  ) : (
                    <p className="text-xs">Not Provided</p>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-ghost btn-xs bg-white hover:bg-lime-500 hover:text-white"
                    onClick={() => {
                      setSelectedId(dealerLocationDetail.id);
                      openUpdateModal();
                    }}
                  >
                    <TbPencilQuestion className="text-regular" />
                  </button>
                  <UpdateDealerLocationAndDetails
                    updateModalProps={{
                      selectedId,
                      allDealersDetails,
                      refetch,
                    }}
                  />
                </td>
                <td>
                  <button
                    className="flex gap-2 btn btn-xs bg-red-500 border-0 text-white hover:bg-red-700 hover:text-white"
                    onClick={() => openDeleteModal(dealerLocationDetail.id)}
                  >
                    <MdDeleteOutline />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white text-red-500">
            <h2 className="text-lg ">
              You want to remove this dealer&apos;s location?
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

export default DealerLocationAndDetailsList;
