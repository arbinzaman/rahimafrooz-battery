import axios from "axios";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import FetchErrorMessage from "../../../../components/shared/Error/FetchErrorMessage";

const ValueList = ({ prompts }) => {
    
  const { allValues, setIsLoading, refetch } = prompts;

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      const body = allValues.find((details) => details.id === id);
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
  // console.log(allValues);
  return (
    <div>
      <div className="overflow-x-auto">
        {allValues === null ? (
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
              {allValues.map((details, i) => (
                <tr key={details.id}>
                  <th>{i + 1}</th>

                  <td>{details.caption}</td>
                  <td>
                    <img src={details.img_url} alt="" className="w-20" />
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

export default ValueList;
