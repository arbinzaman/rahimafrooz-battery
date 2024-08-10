import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import FaqUpdateModal from "./FaqUpdateModal";
import { toast } from "react-hot-toast";
import { FaQuestion } from "react-icons/fa6";
import { TbPencilQuestion } from "react-icons/tb";
import AddAFaq from "./AddAFaq";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AllFaqs = () => {
  const [selectedId, setSelectedId] = useState();

  const { data: allFaqs = [], refetch } = useQuery({
    queryKey: ["allFaqs"],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/faqs`);
      const data = await res.json();
      return data;
    },
    refetchOnWindowFocus: true,
  });

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/faqs/${id}`
      );
      if (res.status === 200) {
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
          <AddAFaq addModalProps={{refetch}}/>
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
                  className="btn btn-ghost btn-xs bg-white hover:bg-lime-500 hover:text-white"
                  onClick={() => {
                    setSelectedId(faq.id);
                    document.getElementById("updateFAQ").open = true;
                  }}
                >
                  <TbPencilQuestion className="text-regular" />
                </button>
                <FaqUpdateModal
                  updateModalProps={{ selectedId, allFaqs, refetch }}
                />
              </td>
              <td>
                <button
                  className="flex gap-2 btn btn-xs bg-red-500 border-0 text-white hover:bg-red-700 hover:text-white"
                  onClick={() => handleDelete(faq.id)}
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

export default AllFaqs;
