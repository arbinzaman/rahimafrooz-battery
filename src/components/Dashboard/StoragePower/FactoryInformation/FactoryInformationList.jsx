import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdDeleteForever, MdEditLocationAlt } from "react-icons/md";
import FetchErrorMessage from "../../../shared/Error/FetchErrorMessage";
import { FaEdit } from "react-icons/fa";

const FactoryInformationList = ({ prompts }) => {
  const [selectedId, setSelectedId] = useState();
  const [readMore, setReadMore] = useState(false);
  const { AllImageText, setIsLoading, refetch } = prompts;

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      const body = AllImageText.find((details) => details.id === id);
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/manufacturing-locations/${id}`,
        { data: body }
      );

      if (res.status === 200) {
        toast.success("Record deleted successfully");
        refetch();
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      // console.log(error);
      toast.error("Something error occurred!");
    }
  };
  // console.log(AllImageText);
  return (
    <div>
      <div className="overflow-x-auto">
        {AllImageText === null ? (
          <FetchErrorMessage />
        ) : (
          <table className="table w-full text-black">
            <thead>
              <tr className="text-black">
                <th>Serial</th>
                <th>factory_title</th>
                <th>Description</th>
                <th>corner_text</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {AllImageText.map((details, i) => (
                <tr key={details.id}>
                  <th>{i + 1}</th>
                  <td>{details.factory_title}</td>
                  <td>
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
                  <td>{details.corner_text}</td>
                  <td>
                    <img src={details.image_url} alt="" className="w-96" />
                  </td>

                  <td>
                    <button className="text-xl">
                      <FaEdit />
                    </button>
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

export default FactoryInformationList;
