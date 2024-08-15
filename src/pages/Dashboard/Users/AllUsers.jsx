import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Loader from "../../../components/shared/Loaders/Loader";
import UserUpdateModal from "./UserUpdateModal";
import { TiUserAdd } from "react-icons/ti";
import AddAUser from "./AddAUser";
import FetchErrorMessage from "../../../components/shared/Error/FetchErrorMessage";
import { useUser } from "../../../contexts/AuthContext";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const queryClient = useQueryClient();
  const { user } = useUser();
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
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(API_URL + `/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("XTOKEN")}`,
        },
      });
      
      if (res.status === 200) {
        toast.success("Successfully deleted!");
      }

      queryClient.invalidateQueries(["users"]);
    } catch (error) {
      toast.error("User deletion failed! Try again");
      console.error("Error deleting users:", error);
    }
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
      <h1 className="flex justify-center text-semi_large text-center font-bold mb-10 mt-5 text-primary">
        Users <FaUsers className="mt-2 ml-2" />
      </h1>

      <div className="flex gap-4 justify-between mb-4">
        <div className="flex gap-5">
          {user?.role === "Super Admin" && (
            <>
              <button
                className="btn btn-ghost btn-xs hover:bg-sky-700 text-white bg-sky-400"
                onClick={() => (document.getElementById("addUser").open = true)}
              >
                Add User <TiUserAdd />
              </button>
              <AddAUser addModalProps={{ refetch }} />
            </>
          )}
        </div>
      </div>

      <table className="table w-full text-black">
        <thead>
          <tr className="text-black">
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
              <td>
                {user?.role === "Super Admin" && (
                  <button
                    className="btn btn-ghost btn-xs  bg-red-500 border-0 text-white hover:bg-red-700 hover:text-white"
                    onClick={() => handleDelete(singleUser.id)}
                  >
                    <FaTrashAlt />
                  </button>
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
