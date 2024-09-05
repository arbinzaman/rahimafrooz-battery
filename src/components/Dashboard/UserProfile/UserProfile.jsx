import { useUser } from "../../../contexts/AuthContext";
import Loader from "../../shared/Loaders/Loader";

const UserProfile = () => {
  const { user } = useUser(); 
  if (!user) return <Loader />; 

  return (
    <section className="pt-16 w-full px-4 sm:px-6 lg:px-20">
      <div className="w-full mx-auto">
        <div className="relative bg-white flex flex-col sm:flex-row items-start sm:items-center w-full mb-6 shadow-xl rounded-lg">
          <div className="px-6 w-full sm:w-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <div className="p-4 flex items-center justify-center">
                <div className="bg-primary text-white rounded-full w-24 h-24 flex items-center justify-center">
                  <span className="text-3xl font-bold">
                    {user.username?.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold leading-normal text-primary mb-2">
                  {user.username}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-black font-bold uppercase">
                  {user.role}
                </div>
                <div className="mb-2 text-black mt-10">
                  Email: <b>{user.email}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
