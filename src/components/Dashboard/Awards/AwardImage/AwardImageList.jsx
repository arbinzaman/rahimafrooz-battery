// import axios from "axios";
// import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import FetchErrorMessage from "../../../shared/Error/FetchErrorMessage";
import UpdateAwardImage from "./UpdateAwardImage";
import { useState } from "react";

const AwardImageList = ({ prompts }) => {
  const [selectedId, setSelectedId] = useState();
  const {
    awardImage,
    // setIsLoading,
    // refetch
  } = prompts;

  // const handleDelete = async (id) => {
  //   try {
  //     setIsLoading(true);
  //     const body = awardImage.find((details) => details.id === id);
  //     const res = await axios.delete(
  //       `${import.meta.env.VITE_BASE_URL}/achievements/${id}`,
  //       { data: body }
  //     );

  //     if (res.status === 200) {
  //       toast.success("Record deleted successfully");
  //       refetch();
  //       setIsLoading(false);
  //     }
  //   } catch (error) {
  //     setIsLoading(false);
  //     toast.error("Something error occurred!");
  //   }
  // };

  return (
    <div>
      <div className="overflow-x-auto">
        {awardImage === null ? (
          <FetchErrorMessage />
        ) : (
          <table className="table w-full text-black">
            <thead>
              <tr className="text-black">
                <th>Serial</th>
                <th>Caption</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {awardImage.map((achievement, i) => (
                <tr key={achievement.id}>
                  <th>{i + 1}</th>
                  <td>{achievement.caption}</td>
                  <td>
                    <img
                      src={achievement.image_url}
                      alt={achievement.caption}
                      className="w-20"
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-xs border-0 bg-teal-400"
                      onClick={() => {
                        setSelectedId(achievement.id);
                        document.getElementById(
                          "allAwardImageUpdate"
                        ).open = true;
                      }}
                    >
                      <FaEdit className="text-white" />
                    </button>
                  </td>
                  <UpdateAwardImage props={{ awardImage, selectedId }} />
                  <td>
                    <button
                      className="btn btn-xs border-0 bg-red-400"
                      // onClick={() => handleDelete(achievement.id)}
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

export default AwardImageList;
