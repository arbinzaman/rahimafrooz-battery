// import axios from "axios";
// import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import FetchErrorMessage from "../../shared/Error/FetchErrorMessage";
import { FaEdit } from "react-icons/fa";
import UpdateGlobalPresenceCountryList from "./UpdateGlobalPresenceCountryList";
import { useState } from "react";

const GlobalPresenceCountryList = ({ prompts }) => {
  const [selectedId, setSelectedId] = useState();
  const {
    countryList,
    // setIsLoading,
    // refetch
  } = prompts;
  //   console.log(countryList);

    const handleDelete = async (id) => {
        console.log(id);
    //   try {
    //     setIsLoading(true);
    //     const body = countryList.find((details) => details.id === id);
    //     const res = await axios.delete(
    //       `${import.meta.env.VITE_BASE_URL}/manufacturing-locations/${id}`,
    //       { data: body }
    //     );

    //     if (res.status === 200) {
    //       toast.success("Record deleted successfully");
    //       refetch();
    //       setIsLoading(false);
    //     }
    //   } catch (error) {
    //     setIsLoading(false);
    //     // console.log(error);
    //     toast.error("Something error occurred!");
    //   }
    };

  return (
    <div>
      <div className="overflow-x-auto">
        {countryList === null ? (
          <FetchErrorMessage />
        ) : (
          <table className="table w-full text-black">
            <thead>
              <tr className="text-black">
                <th>Serial</th>
                <th>Region</th>
                <th>Countries</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {countryList.map((region, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{region.region}</td>
                  <td>{region.countries.join(", ")}</td>
                  <td>
                    <button
                      className="btn btn-xs btn-ghost bg-white text-black hover:bg-green-400 hover:text-white"
                      onClick={() => {
                        document.getElementById("globalPresenceCountryList").open = true;
                        setSelectedId(location.id);
                      }}
                    >
                      <FaEdit />
                    </button>
                    <UpdateGlobalPresenceCountryList
                      updateModalProps={{
                        countryList,
                        selectedId,
                        //  refetch
                      }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-xs border-0 bg-red-400"
                        onClick={() => handleDelete(region.id)}
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

export default GlobalPresenceCountryList;
