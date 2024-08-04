import axios from "axios";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import FetchErrorMessage from "../../../../components/shared/Error/FetchErrorMessage";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import UpdateMilestoneInfoModal from "./UpdateMilestoneInfoModal";

const MilestoneList = ({ prompts }) => {
  const [selectedId, setSelectedId] = useState();
  const [readMore, setReadMore] = useState(false);
  const { allMiltestone, setIsLoading, refetch } = prompts;

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      const body = allMiltestone.find((details) => details.id === id);
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/storage-power/milestone-image/${id}`,
        { data: body }
      );

      if (res.status === 200) {
        refetch();
        toast.success("Record deleted successfully");
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Something error occurred!");
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        {allMiltestone === null ? (
          <FetchErrorMessage />
        ) : (
          <table className="table w-full text-black">
            <thead>
              <tr className="text-black">
                <th>Serial</th>
                <th>Description</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {allMiltestone.map((details, i) => (
                <tr key={details.id}>
                  <th>{i + 1}</th>

                  <td className="w-96">
                    {selectedId === details.id && readMore
                      ? details.description
                      : details.description.slice(0, 100)}{" "}
                    {selectedId === details.id && readMore ? (
                      <span
                        className="text-blue-500 hover:cursor-pointer"
                        onClick={() => {
                          setSelectedId(details.id);
                          setReadMore(false);
                        }}
                      >
                        collapse
                      </span>
                    ) : (
                      <span
                        className="text-blue-500 hover:cursor-pointer"
                        onClick={() => {
                          setSelectedId(details.id);
                          setReadMore(true);
                        }}
                      >
                        read more
                      </span>
                    )}
                  </td>
                  <td>
                    <img src={details.image_url} alt="" className="w-96" />
                  </td>
                  <td>
                    <button
                      className="text-xl"
                      onClick={() => {
                        setSelectedId(details.id);
                        document.getElementById(
                          "update_milestone_info_modal"
                        ).open = true;
                      }}
                    >
                      <FaEdit />
                    </button>
                    <UpdateMilestoneInfoModal
                      updateModalProps={{
                        selectedId,
                        allMiltestone,
                        refetch,
                      }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-xs border-0 bg-red-400"
                      onClick={() => handleDelete(details.id)}
                    >
                      <MdDeleteForever className="text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MilestoneList;
