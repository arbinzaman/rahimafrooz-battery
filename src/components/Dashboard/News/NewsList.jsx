import { MdDeleteOutline,  } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import NewsUpdateModal from "./NewsUpdateModal";
import { TiEdit } from "react-icons/ti";

const NewsList = ({ prompts }) => {
  const [selectedId, setSelectedId] = useState();
  const { allNews, refetch } = prompts;

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/contact/global-locations/${id}`
      );

      if (res.status === 200) {
        toast.success("Successfully deleted!");
        refetch();
      }
    } catch (error) {
      console.error("Error updating location:", error);
      toast.error("Please try again!");
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full text-black">
        <thead>
          <tr className="text-black">
            <th>Serial</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Publish Date</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allNews?.map((news, i) => (
            <tr key={news.id}>
              <th>{i + 1}</th>
              <td>{news.title}</td>
              <td>{news.description}</td>
              <td>
                {" "}
                <img src={news.image_url} alt="" width={"100%"} />
              </td>
              <td>{news.publish_date}</td>
              <td>
                <button
                  title="Update News"
                  className="btn btn-xs bg-white hover:text-white border-none hover:bg-green-500 "
                  onClick={() => {
                    document.getElementById("my_modal_2").open = true;
                    setSelectedId(news.id);
                  }}
                >
                  <TiEdit className="text-regular text-primary " />
                </button>
                <NewsUpdateModal
                  updateModalProps={{ allNews, selectedId, refetch }}
                />
              </td>
              <td>
                <button
                  className="btn btn-xs bg-red-500  border-none text-white hover:bg-red-700 hover:text-white"
                  onClick={() => handleDelete(news.id)}
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

export default NewsList;
