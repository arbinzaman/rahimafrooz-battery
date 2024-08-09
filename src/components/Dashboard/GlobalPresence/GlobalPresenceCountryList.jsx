import { MdDeleteForever } from "react-icons/md";
import FetchErrorMessage from "../../shared/Error/FetchErrorMessage";
import UpdateGlobalPresenceCountryList from "./UpdateGlobalPresenceCountryList";
import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import axios from "axios";
import toast from "react-hot-toast";

const GlobalPresenceCountryList = ({ prompts }) => {
  const { countryList, refetch } = prompts;
  const [selectedId, setSelectedId] = useState();

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BASE_URL}/global-presence/${id}`
      );

      if (res.status === 200) {
        toast.success("Record deleted successfully");
        refetch();
      }
    } catch (error) {
      toast.error("Something error occurred!");
    }
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
                <th>Continent</th>
                <th>Countries</th>
                <th>Add Country</th>
              </tr>
            </thead>
            <tbody>
              {countryList.map((continent, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{continent.continent}</td>
                  <td>{continent.countries.join(", ")}</td>
                  <td>
                    <button
                      className="btn btn-xs btn-ghost bg-white text-black hover:bg-green-400 hover:text-white"
                      onClick={() => {
                        document.getElementById(
                          "globalPresenceCountryList"
                        ).open = true;
                        setSelectedId(continent.id);
                      }}
                    >
                      <IoAddCircleOutline />
                    </button>
                    <UpdateGlobalPresenceCountryList
                      updateModalProps={{
                        countryList,
                        selectedId,
                        refetch,
                      }}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-xs border-0 bg-red-400"
                      onClick={() => handleDelete(continent.id)}
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
