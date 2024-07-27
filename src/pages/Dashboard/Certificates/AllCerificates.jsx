import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { PiCertificateFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import Loader from "../../../components/shared/Loaders/Loader";
import { MdDeleteOutline } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import { FaEdit } from "react-icons/fa";
import CertificateUpdateModal from "./CertificateUpdateModal";

const AllCerificates = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [updatedData, setUpdatedData] = useState({});

  const url = `${import.meta.env.VITE_BASE_URL}/certificates`;

  const {
    data: allCertificates = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["allCertificates"],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      return data;
    },
    // refetchOnWindowFocus: true,
  });

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      refetch(); // Refresh data after deletion
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      const res = await fetch(`${url}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      refetch(); // Refresh data after update
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }
  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary flex justify-center">
        Certificates <PiCertificateFill className="text-semi_large mt-3 ml-2" />
      </h1>

      <div className="flex gap-4 justify-between mb-4">
        <div className="flex gap-5">
          <Link to="/dashboard/add-a-certificate">
            {" "}
            <button className="flex gap-2 btn btn-xs bg-white border-0 text-black hover:bg-sky-500 hover:text-white">
              Add Certificate<PiCertificateFill />
            </button>
          </Link>
          <button
            className="flex gap-2 btn btn-xs bg-white border-0 text-black hover:bg-red-500 hover:text-white"
            onClick={() => handleDelete(selectedId)}
          >
            Delete
            <MdDeleteOutline />
          </button>
        </div>
        <div>
          <button
            className="flex gap-2 btn btn-xs bg-white border-0 text-black hover:bg-teal-300 hover:text-white"
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
              <td>{certificate.created_at}</td>
              <td>
                <img src={certificate.img_url} alt={certificate.title} width="100" />
              </td>
              <td>
                <button
                  className="btn btn-ghost btn-xs bg-white hover:bg-lime-500 hover:text-white"
                  onClick={() => {
                    setSelectedId(certificate.id);
                    setUpdatedData(certificate);
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
        <CertificateUpdateModal
        updatedData={updatedData}
          dataId={selectedId}
          onClose={() => setModalOpen(false)}
          onUpdate={(updatedData) => {
            handleUpdate(selectedId, updatedData);
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default AllCerificates;
