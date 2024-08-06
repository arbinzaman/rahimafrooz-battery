import { Link } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai";
import { useUser } from "../../../contexts/AuthContext";
import Loader from "../../../components/shared/Loaders/Loader";

const UserProfile = () => {
  const { user } = useUser(); 
  if (!user) return <Loader />; 

  return (
    <section className="pt-16 w-full px-20">
      <div className="w-full px-4 mx-auto">
        <div className="relative bg-white flex w-full mb-6 shadow-xl rounded-lg">
          <div className="px-6 w-full">
            <div className="flex flex-wrap justify-center">
              <div className="p-4 flex items-center justify-center">
                <div className="bg-primary  text-white rounded-full w-24 h-24 flex items-center justify-center">
                  <span className="text-3xl font-bold">
                    {user.username?.charAt(0)}
                  </span>{" "}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                  {user.username}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  {user.role}
                </div>
                <div className="mb-2 text-blueGray-600 mt-10">
                  Email: <b>{user.email}</b>
                </div>
              </div>
              <div className="dropdown dropdown-end ml-auto">
                <label tabIndex={0} className="m-1 cursor-pointer">
                  <AiOutlineSetting className="text-xl" />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-tahiti-grey rounded-box w-52"
                >
                  <li>
                    <Link to="/user/updatepassword">Update Password</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
