import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";

const ManufacturingLocationsList = ({ manufacturingPrompts }) => {
  const [selectedId, setSelectedId] = useState();
  const [readMore, setReadMore] = useState(false);
  const { manufacturingDetails, refetch } = manufacturingPrompts;
  const handleDelete = async (id) => {
    try {
      console.log(id);
      const body = manufacturingDetails.find((details) => details.id === id);
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/manufacturing-locations/${id}`,
        { data: body }
      );

      if (res.status === 200) {
        toast.error("Record deleted successfully");
        refetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full text-black">
          <thead>
            <tr className="text-black">
              <th>Serial</th>
              <th>Title</th>
              <th>Location/Type</th>
              <th>Description</th>
              <th>Image</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {manufacturingDetails.map((details, i) => (
              <tr key={details.id}>
                <th>{i + 1}</th>
                <td>{details.title}</td>
                <td>{details.location}</td>
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
                <td>
                  <img src={details.imageurl} alt="" className="w-96" />
                </td>
                <td title="Edit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
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
      </div>
    </div>
  );
};

export default ManufacturingLocationsList;
