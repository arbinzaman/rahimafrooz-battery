import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Loader from "../../../components/shared/Loaders/Loader";
import UserUpdateModal from "./UserUpdateModal"; // Import the Update Modal component
import { TiUserAdd } from "react-icons/ti";
import AddAUser from "./AddAUser";
import FetchErrorMessage from "../../../components/shared/Error/FetchErrorMessage";

const AllUsers = () => {
  const queryClient = useQueryClient(); // Initialize the queryClient
  const [selectedIds, setSelectedIds] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Define the API URL
  const API_URL = `${import.meta.env.VITE_BASE_URL}/users`;

  // Fetch users function
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
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // Delete users function
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

      // Refetch users after deletion
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
    return <FetchErrorMessage/>
  }

  return (
    <div>
      <h1 className="text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        Users
      </h1>

      <div className="flex gap-4 justify-between mb-4">
        <div className="flex gap-5">
          {/* <Link to="/dashboard/add-a-user"> */}
          <button
            className="btn btn-ghost btn-xs hover:bg-sky-700 text-white bg-sky-400"
            onClick={() => document.getElementById("addUser").showModal()}
          >
            {" "}
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
        </div>
      </div>

      <table className="table w-full text-black">
        <thead>
          <tr className="text-black">
            <th>
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedIds.length === users.length}
              />
            </th>
            <th>Username</th>
            <th>Employee ID</th>
            <th>Email</th>
            <th>Role</th>
            <th>Joined At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleCheckboxChange(user.id)}
                  checked={selectedIds.includes(user.id)}
                />
              </td>
              <td>{user.username}</td>
              <td>{user.emp_id}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.joined_at}</td>
              <td>
                <button
                  className="btn btn-xs btn-ghost bg-white text-black hover:bg-green-400 hover:text-white"
                  onClick={() => handleUpdate(user)}
                >
                  <FaEdit />
                </button>
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
