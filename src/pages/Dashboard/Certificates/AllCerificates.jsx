import { useState } from "react";
import { PiCertificateFill } from "react-icons/pi";
import { MdDeleteOutline } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import { FaEdit } from "react-icons/fa";
import CertificateUpdateModal from "./CertificateUpdateModal";
import certificateData from "../../../demoData/CertificateData.json";
import AddACertificateData from "./AddACertificateData";

const AllCertificates = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [updatedData, setUpdatedData] = useState({});
  const [selectAll, setSelectAll] = useState(false);

  const allCertificates = certificateData;
  const url = `${import.meta.env.VITE_BASE_URL}/certificates`;
  // const url = ${import.meta.env.VITE_BASE_URL}/certificates;

  // const {
  //   data: allCertificates = [],
  //   isLoading,
  //   error,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["allCertificates"],
  //   queryFn: async () => {
  //     const res = await fetch(url);
  //     if (!res.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await res.json();
  //     return data;
  //   },
  //   // refetchOnWindowFocus: true,
  // });
  // Handle select all
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedIds([]);
    } else {
      setSelectedIds(allCertificates.map((certificate) => certificate.id));
    }
    setSelectAll(!selectAll);
  };

  // Handle checkbox change
  const handleCheckboxChange = (id) => {
    setSelectedIds((prevSelectedIds) => {
      const updatedSelectedIds = prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id];
      setSelectAll(updatedSelectedIds.length === allCertificates.length);
      return updatedSelectedIds;
    });
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`${url}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: selectedIds }),
      });
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      // Refetch data or update state after deletion
      setSelectedIds([]);
      setSelectAll(false);
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
      // Refetch data or update state after update
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  // if (isLoading) {
  //   return <Loader />;
  // }

  // if (error) {
  //   return <div>Error fetching data</div>;
  // }

  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary flex justify-center">
        Certificates <PiCertificateFill className="text-semi_large mt-3 ml-2" />
      </h1>

      <div className="flex gap-4 justify-between mb-4">
        <div className="flex gap-5">
            <button
              className="flex gap-2 btn btn-xs border-0 text-white bg-sky-400 hover:bg-sky-700 hover:text-white"
              onClick={() => document.getElementById("addCertificate").showModal()}
            >
              Add Certificate <PiCertificateFill />
            </button>
            <AddACertificateData/>
          <button
            className="flex gap-2 btn btn-xs bg-red-500 border-0 text-white hover:bg-red-700 hover:text-white"
            onClick={handleDelete}
            // disabled={selectedIds.length === 0}
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
            <th>Title</th>
            <th>Image</th>
            <th>Created at</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {allCertificates.map((certificate, i) => (
            <tr key={certificate.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(certificate.id)}
                  checked={selectedIds.includes(certificate.id)}
                />
              </td>
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
          dataId={updatedData.id} // Use a single ID for editing
          onClose={() => setModalOpen(false)}
          onUpdate={(updatedData) => {
            handleUpdate(updatedData.id, updatedData); // Updated handleUpdate to accept single ID
            setModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default AllCertificates;
