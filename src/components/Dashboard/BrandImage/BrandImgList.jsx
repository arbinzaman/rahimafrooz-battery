// import axios from "axios";
// import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import FetchErrorMessage from "../../shared/Error/FetchErrorMessage";

const BrandImgList = ({ prompts }) => {
  const {
    brandImg,
    // setIsLoading,
    // refetch
  } = prompts;
//   console.log(brandImg);

  //   const handleDelete = async (id) => {
  //     try {
  //       setIsLoading(true);
  //       const body = brandImg.find((details) => details.id === id);
  //       const res = await axios.delete(
  //         `${import.meta.env.VITE_BASE_URL}/manufacturing-locations/${id}`,
  //         { data: body }
  //       );

  //       if (res.status === 200) {
  //         toast.success("Record deleted successfully");
  //         refetch();
  //         setIsLoading(false);
  //       }
  //     } catch (error) {
  //       setIsLoading(false);
  //       // console.log(error);
  //       toast.error("Something error occurred!");
  //     }
  //   };
  // console.log(brandImg);
  return (
    <div>
      <div className="overflow-x-auto">
        {brandImg === null ? (
          <FetchErrorMessage />
        ) : (
          <table className="table w-full text-black">
            <thead>
              <tr className="text-black">
                <th>Serial</th>
                <th>brand_code</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {brandImg.map((details, i) => (
                <tr key={details.id}>
                  <th>{i + 1}</th>
                  <td>{details.brand_code}</td>
                  <td>
                    <img src={details.image_url} alt={details.image_url} className="w-96" />
                  </td>

                  <td>
                    <button
                      className="btn btn-xs border-0 bg-red-400"
                    //   onClick={() => handleDelete(details.id)}
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

export default BrandImgList;
