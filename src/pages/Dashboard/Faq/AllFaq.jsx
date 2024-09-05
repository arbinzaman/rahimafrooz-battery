import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import FaqUpdateModal from "./FaqUpdateModal";
import { toast } from "react-hot-toast";
import { FaQuestion } from "react-icons/fa6";
import AddAFaq from "./AddAFaq";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { TiEdit } from "react-icons/ti";
const AllFaqs = () => {
  const [selectedId, setSelectedId] = useState();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const { data: allFaqs = [], refetch } = useQuery({
    queryKey: ["allFaqs"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/faqs`);
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
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/faqs/${id}`,
        {
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
      toast.error("Deletion Failed.");
    }
  };

  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary flex justify-center">
        Frequently Asked Questions{" "}
        <FaQuestion className="text-semi_large mt-3 ml-2" />
      </h1>

      <div className="flex gap-4 justify-between mb-4">
        <div className="flex gap-5">
          <button
            className="flex gap-2 btn btn-xs  border-0 text-white bg-sky-400 hover:bg-primary"
            onClick={() => (document.getElementById("addFaq").open = true)}
          >
            Add FAQ <FaQuestion />
          </button>
          <AddAFaq addModalProps={{ refetch }} />
        </div>
        <div>
          <button
            className="flex gap-2 btn btn-xs  border-0 text-white bg-teal-400 hover:bg-teal-700 hover:text-white"
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
            <th>Question</th>
            <th>Answer</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {allFaqs.map((faq, i) => (
            <tr key={faq.id}>
              <td>{i + 1}</td>
              <td>{faq.question}</td>
              <td>{faq.answer}</td>
              <td>
                <button
                  className="btn btn-xs bg-white hover:text-white border-none hover:bg-gray-200"
                  onClick={() => {
                    setSelectedId(faq.id);
                    document.getElementById("updateFAQ").open = true;
                  }}
                >
                  <TiEdit className="text-regular text-primary " />
                </button>
                <FaqUpdateModal
                  updateModalProps={{ selectedId, allFaqs, refetch }}
                />
              </td>
              <td>
                <button
                  className="flex gap-2 btn btn-xs bg-red-500 border-0 text-white hover:bg-red-700 hover:text-white"
                  onClick={() => openDeleteModal(faq.id)}
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
            <h2 className="text-lg ">Do you want to remove this FAQ?</h2>
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

export default AllFaqs;
