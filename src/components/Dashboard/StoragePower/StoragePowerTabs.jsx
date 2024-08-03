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
        className="tabs rounded-md bg-white text-xs md:text-regular tab text-black w-full justify-around"
      >
        <a
          role="tab"
          onClick={() => setTab("ytLink")}
          className={tab === "ytLink" ? "bg-primary  text-white tab" : ""}
        >
          YouTube Link
        </a>
        <a
          role="tab"
          onClick={() => setTab("imgText")}
          className={tab === "imgText" ? "bg-primary  text-white tab" : ""}
        >
          Image & Text
        </a>
        <a
          role="tab"
          onClick={() => setTab("milestone")}
          className={tab === "milestone" ? "bg-primary  text-white tab" : ""}
        >
          Milestone
        </a>
        <a
          role="tab"
          onClick={() => setTab("ourValues")}
          className={tab === "ourValues" ? "bg-primary  text-white tab" : ""}
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
