import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import Cookies from "js-cookie";
import { FaEdit, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import UpdateBoardMembers from "./UpdateBoardMembers";

const BoardMembersList = ({ prompts }) => {
  const { allBoardMembers, refetch } = prompts;
  const [selectedId, setSelectedId] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(4);

  const handleDelete = async (id) => {
    try {
      const body = allBoardMembers?.find((item) => item.id === id);
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/board-members/${id}`,
        {
          data: body,
          headers: {
            Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
          },
        }
      );

      if (res.status === 200) {
        setDeleteModalOpen(false);
        refetch();
        toast.success("Successfully deleted!");
      }
    } catch (error) {
      console.error("Error updating location:", error);
      toast.error("Please try again!");
    }
  };  

  const openDeleteModal = (id) => {
    setSelectedId(id);
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedId(null);
  };

  // Pagination calculations
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = allBoardMembers?.slice(indexOfFirstData, indexOfLastData);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full text-black">
          <thead>
            <tr className="text-black">
              <th>Serial</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Description</th>
              <th>Image</th>
              <th>Social Links</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentData &&
              currentData.map((member, i) => (
                <tr key={member.id}>
                  <th>{indexOfFirstData + i + 1}</th>
                  <td>{member.name}</td>
                  <td>{member.designation}</td>
                  <td>
                    {selectedId === member.id && readMore
                      ? member.description
                      : member.description.slice(0, 100)}{" "}
                    {selectedId === member.id && readMore ? (
                      <span
                        className="text-blue-500 hover:cursor-pointer"
                        onClick={() => {
                          setSelectedId(member.id);
                          setReadMore(false);
                        }}
                      >
                        collapse
                      </span>
                    ) : (
                      <span
                        className="text-blue-500 hover:cursor-pointer"
                        onClick={() => {
                          setSelectedId(member.id);
                          setReadMore(true);
                        }}
                      >
                        read more
                      </span>
                    )}
                  </td>
                  <td>
                    <img src={member.image_url} alt="" className="w-40" />
                  </td>
                  <td>
                    <div className="flex space-x-2">
                      {member.facebook && (
                        <a
                          href={member.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFacebook className="text-blue-600 hover:text-blue-800" />
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaInstagram className="text-pink-500 hover:text-pink-700" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin className="text-blue-700 hover:text-blue-900" />
                        </a>
                      )}
                    </div>
                  </td>
                  <td title="Edit">
                    <button
                      className=""
                      onClick={() => {
                        document.getElementById("boardMembers").open = true;
                        setSelectedId(member.id);
                      }}
                    >
                      <FaEdit />
                    </button>
                    <UpdateBoardMembers
                      updateModalProps={{
                        allBoardMembers,
                        selectedId,
                        refetch,
                      }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-xs bg-red-500 border-none text-white hover:bg-red-700 hover:text-white"
                      onClick={() => openDeleteModal(member.id)}
                    >
                      <MdDeleteOutline />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* Pagination */}
        {allBoardMembers && allBoardMembers.length > dataPerPage && (
          <div className="flex justify-center mt-4">
            <div className="join">
              {[
                ...Array(
                  Math.ceil(allBoardMembers.length / dataPerPage)
                ).keys(),
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
                You want to remove this board member?
              </h2>
              <div className="modal-action">
                <button
                  className="btn bg-red-500 text-white border-0 btn-ghost btn-xs hover:bg-red-700 hover:text-white"
                  onClick={() => handleDelete(selectedId)}
                >
                  Yes, Remove
                </button>
                <button
                  className="btn text-red-500 border-0 btn-ghost btn-xs bg-gray-200"
                  onClick={closeDeleteModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default BoardMembersList;
