import UserProfile from "../../../components/Dashboard/UserProfile/UserProfile";
import UserTabs from "../../../components/Dashboard/UserProfile/UserTabs";

const Profile = () => {
  return (
    <div>
      <section>
        <UserProfile />
      </section>
      <section className="">
        <UserTabs />
      </section>
    </div>
  );
};

export default Profile;
