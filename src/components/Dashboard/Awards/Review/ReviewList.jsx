import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";

const ReviewsList = ({ prompts }) => {
  const { allReviews, refetch } = prompts;

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
            <th>User Name</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
          {allReviews?.map((review, i) => (
            <tr key={review.id}>
              <th>{i + 1}</th>
              <td>{review.user_name}</td>
              <td>{review.review}</td>
              <td></td>
              <td>
                <button
                  className="btn btn-xs bg-red-500  border-none text-white hover:bg-red-700 hover:text-white"
                  onClick={() => handleDelete(review.id)}
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

export default ReviewsList;
