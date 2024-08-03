import axios from "axios";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import FetchErrorMessage from "../../../../components/shared/Error/FetchErrorMessage";

const YouTubeList = ({ prompts }) => {
  const { allYoutubeLinks, setIsLoading, refetch } = prompts;

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      const body = allYoutubeLinks.find((details) => details.id === id);
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/youtube-video/${id}`,
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
  
  return (
    <div>
      <div className="overflow-x-auto">
        {allYoutubeLinks === null ? (
          <FetchErrorMessage />
        ) : (
          <table className="table w-full text-black">
            <thead>
              <tr className="text-black">
                <th>Serial</th>
                <th className="text-center">Video & URL</th>
              </tr>
            </thead>
            <tbody>
              {allYoutubeLinks.map((details, i) => (
                <tr key={details.id}>
                  <th>{i + 1}</th>

                  <td className="flex flex-col items-center">
                    <iframe width="" height="" src={details.video_url}></iframe>
                    <p className="my-2">{details.video_url}</p>
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

export default YouTubeList;
