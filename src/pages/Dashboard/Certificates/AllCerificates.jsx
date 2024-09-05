import { useState } from "react";
import { PiCertificateFill } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import CertificateUpdateModal from "./CertificateUpdateModal";
// import certificateData from "../../../demoData/CertificateData.json";
import AddACertificateData from "./AddACertificateData";
import { TiEdit } from "react-icons/ti";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";

const AllCertificates = () => {
  const [selectedId, setSelectedId] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  // const allCertificates = certificateData;

  const url = `${import.meta.env.VITE_BASE_URL}/certificates`;

  const { data: allCertificates = [], refetch } = useQuery({
    queryKey: ["allCertificates"],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

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
      const body = allCertificates.find((item) => item.id === selectedId);
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/certificates/${id}`,
        {
          data: body,
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 200) {
        closeDeleteModal();
        refetch();
        toast.success("Deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary flex justify-center">
        Certificates <PiCertificateFill className="text-semi_large mt-3 ml-2" />
      </h1>

      <div className="flex gap-4 justify-between mb-4">
        <div className="flex gap-5">
          <button
            className="flex gap-2 btn btn-xs border-0 text-white bg-sky-400 hover:bg-sky-700 hover:text-white"
            onClick={() =>
              (document.getElementById("addCertificateModal").open = true)
            }
          >
            Add Certificate <PiCertificateFill />
          </button>
          <AddACertificateData addCertificateModal={{ refetch }} />
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
            <th>Title</th>
            <th>Image</th>
            <th>Created at</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {allCertificates.map((certificate, i) => (
            <tr key={certificate.id}>
              <td>{i + 1}</td>
              <td>{certificate.title}</td>
              <td>
                <img
                  src={certificate.img_url}
                  alt={certificate.title}
                  width="100"
                />
              </td>
              <td>{certificate.created_at}</td>
              <td>
                <button
                  className="btn btn-ghost btn-xs bg-white hover:bg-lime-500 hover:text-white"
                  onClick={() => {
                    document.getElementById(
                      "updateCertificateModal"
                    ).open = true;
                    setSelectedId(certificate.id);
                  }}
                >
                  <TiEdit className="text-regular text-primary " />
                </button>
                <CertificateUpdateModal
                  updateModalData={{ selectedId, allCertificates, refetch }}
                />
              </td>
              <td>
                <button
                  className="flex gap-2 btn btn-xs bg-red-500 border-0 text-white hover:bg-red-700 hover:text-white"
                  onClick={() => openDeleteModal(certificate.id)}
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
            <h2 className="text-lg ">Do you want to remove Certificate?</h2>
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

export default AllCertificates;
