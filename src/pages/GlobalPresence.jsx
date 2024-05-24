import banner from "../assets/images/7. Global Presence-ai.png";
import GlobalPresenceSlider from "../components/GlobalPresence/GlobalPresenceSlider";
import InternationalOperations from "../components/GlobalPresence/InternationalOperations";
import { allDeviceMaxWidth } from "../styles/maxWidth";

const GlobalPresence = () => {
  return (
    <section className={`${allDeviceMaxWidth}`}>
      <div>
        <img src={banner} alt="" className="w-full" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-48 text-center m-0 lg:mb-10 mt-10 bg-background  mx-5">
        <InternationalOperations />
        <div className="bg-primary mb-7">
          <GlobalPresenceSlider />
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
