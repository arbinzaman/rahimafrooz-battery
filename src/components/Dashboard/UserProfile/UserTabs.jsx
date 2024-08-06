import { useState } from "react";
import UserBasicInfo from "./UserBasicInfo";
import UpdatePassword from "./UpdatePassword";
import { GrContactInfo } from "react-icons/gr";
import { RiLockPasswordFill } from "react-icons/ri";

const UserTabs = () => {
  const [tab, setTab] = useState("basicInfo");

  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 ">
      <div className="w-full mx-auto  rounded-lg">
        <div
          role="tablist"
          className="flex border-b border-gray-200 text-xs md:text-sm rounded-md bg-white justify-center items-center "
        >
          <a
            role="tab"
            onClick={() => setTab("basicInfo")}
            className={`flex-1 text-center py-3 cursor-pointer ${
              tab === "basicInfo"
                ? "bg-primary text-white font-semibold rounded-md flex justify-center items-center"
                : "text-black hover:bg-gray-100 justify-center items-center flex"
            }`}
          >
            Basic Info <GrContactInfo  className="ml-2 text-medium"/>
          </a>
          <a
            role="tab"
            onClick={() => setTab("passwordChange")}
            className={`flex-1 text-center py-3 cursor-pointer ${
              tab === "passwordChange"
                ? "bg-primary text-white font-semibold  rounded-md flex justify-center items-center"
                : "text-black hover:bg-gray-100 flex justify-center items-center"
            }`}
          >
            Change Password <RiLockPasswordFill  className="ml-2 text-medium" />
          </a>
        </div>

        <div className="p-4">
          {tab === "basicInfo" && <UserBasicInfo />}
          {tab === "passwordChange" && <UpdatePassword />}
        </div>
      </div>
    </div>
  );
};

export default UserTabs;
