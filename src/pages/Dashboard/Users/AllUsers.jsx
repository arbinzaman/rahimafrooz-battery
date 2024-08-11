import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Loader from "../../../components/shared/Loaders/Loader";
import UserUpdateModal from "./UserUpdateModal";
import { TiUserAdd } from "react-icons/ti";
import AddAUser from "./AddAUser";
import FetchErrorMessage from "../../../components/shared/Error/FetchErrorMessage";
import { useUser } from "../../../contexts/AuthContext";

const AllUsers = () => {
  const queryClient = useQueryClient();
  const { user } = useUser(); // Fetch the user context
  const [selectedIds, setSelectedIds] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const API_URL = `${import.meta.env.VITE_BASE_URL}/users`;

  const fetchUsers = async () => {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    return res.json();
  };

  const {
    data: users = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const handleDelete = async () => {
    try {
      const res = await fetch(API_URL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: selectedIds }),
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      console.log("Delete success:", data);

      queryClient.invalidateQueries(["users"]);
      setSelectedIds([]);
    } catch (error) {
      console.error("Error deleting users:", error);
    }
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedIds(users.map((user) => user.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleCheckboxChange = (id) => {
    setSelectedIds((prevSelectedIds) =>
      prevSelectedIds.includes(id)
        ? prevSelectedIds.filter((selectedId) => selectedId !== id)
        : [...prevSelectedIds, id]
    );
  };

  const handleUpdate = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <FetchErrorMessage />;
  }

  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        Users
      </h1>

      <div className="flex gap-4 justify-between mb-4">
        <div className="flex gap-5">
          {user?.role === "Super Admin" && (
            <>
              <button
                className="btn btn-ghost btn-xs hover:bg-sky-700 text-white bg-sky-400"
                onClick={() => document.getElementById("addUser").showModal()}
              >
                Add User <TiUserAdd />
              </button>
              <AddAUser />
              <button
                className="btn btn-ghost btn-xs  bg-red-500 border-0 text-white hover:bg-red-700 hover:text-white"
                onClick={handleDelete}
                // disabled={selectedIds.length === 0}
              >
                Delete <FaTrashAlt />
              </button>
            </>
          )}
        </div>
      </div>

      <table className="table w-full text-black">
        <thead>
          <tr className="text-black">
            <th>
              {user?.role === "Super Admin" && (
                <>
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedIds.length === users.length}
                  />
                </>
              )}
            </th>
            <th>Username</th>
            <th>Employee ID</th>
            <th>Email</th>
            <th>Role</th>
            <th>Joined At</th>
            {user?.role === "Super Admin" && (
              <>
                <th>Actions</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {users.map((singleUser) => (
            <tr key={singleUser.id}>
              <td>
                {user?.role === "Super Admin" && (
                  <>
                    <input
                      type="checkbox"
                      onChange={() => handleCheckboxChange(singleUser.id)}
                      checked={selectedIds.includes(singleUser.id)}
                    />
                  </>
                )}
              </td>
              <td>{singleUser.username}</td>
              <td>{singleUser.emp_id}</td>
              <td>{singleUser.email}</td>
              <td>{singleUser.role}</td>
              <td>{singleUser.joined_at}</td>
              <td>
                {user?.role === "Super Admin" && (
                  <>
                    <button
                      className="btn btn-xs btn-ghost bg-white text-black hover:bg-green-400 hover:text-white"
                      onClick={() => handleUpdate(singleUser)}
                    >
                      <FaEdit />
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalOpen && selectedUser && (
        <UserUpdateModal
          user={selectedUser}
          onClose={() => setModalOpen(false)}
          onUpdate={() => queryClient.invalidateQueries(["users"])}
        />
      )}
    </div>
  );
};

export default AllUsers;
