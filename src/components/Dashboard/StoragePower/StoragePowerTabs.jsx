import { useState } from "react";
import AllImageText from "./ImageText/AllImageText";
import AllMilestone from "./Milestone/AllMilestone";
import AllValues from "./OurValues/AllValues";
import AllYouTubeLinks from "./YouTubeLink/AllYouTubeLinks";

const StoragePowerTabs = () => {
  const [tab, setTab] = useState("ytLink");
  return (
    <div>
      <div
        role="tablist"
        className="tabs text-xs md:text-regular rounded-md bg-white tab text-black w-full justify-around"
      >
        <a
          role="tab"
          onClick={() => setTab("ytLink")}
          className={tab === "ytLink" ? "text-xs md:text-regular bg-primary  text-white tab" : ""}
        >
          Video URL
        </a>
        <a
          role="tab"
          onClick={() => setTab("imgText")}
          className={tab === "imgText" ? "text-xs md:text-regular bg-primary  text-white tab" : ""}
        >
          Image & Text
        </a>
        <a
          role="tab"
          onClick={() => setTab("milestone")}
          className={tab === "milestone" ? "text-xs md:text-regular bg-primary  text-white tab" : ""}
        >
          Milestone
        </a>
        <a
          role="tab"
          onClick={() => setTab("ourValues")}
          className={tab === "ourValues" ? "text-xs md:text-regular bg-primary  text-white tab" : ""}
        >
          Our Values
        </a>
      </div>

      <div>
        {tab === "ytLink" ? (
          <div>
            <AllYouTubeLinks />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        {tab === "imgText" ? (
          <div>
            <AllImageText />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        {tab === "milestone" ? (
          <div>
            <AllMilestone />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        {tab === "ourValues" ? (
          <div>
            <AllValues />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default StoragePowerTabs;
