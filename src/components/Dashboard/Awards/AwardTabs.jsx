import { useState } from "react";

import AllSpecialAwardAndAchievement from "./AllSpecialAwardAndAchievement";
import AllAwardsImage from "./AllAwardsImage";

const AwardTabs = () => {
  const [tab, setTab] = useState("awardReceiving");
  return (
    <div>
      <div
        role="tablist"
        className="tabs text-xs md:text-regular rounded-md bg-white tab text-black w-full justify-around"
      >
        <a
          role="tab"
          onClick={() => setTab("awardReceiving")}
          className={tab === "awardReceiving" ? "text-xs md:text-regular bg-primary  text-white tab" : ""}
        >
          Award Receiving Section
        </a>
        <a
          role="tab"
          onClick={() => setTab("awardImage")}
          className={tab === "awardImage" ? "text-xs md:text-regular bg-primary  text-white tab" : ""}
        >
          Award Image
        </a>
      
      </div>

      <div>
        {tab === "awardReceiving" ? (
          <div>
            <AllSpecialAwardAndAchievement />
          </div>
        ) : (
          <></>
        )}
      </div>
      <div>
        {tab === "awardImage" ? (
          <div>
            <AllAwardsImage />
          </div>
        ) : (
          <></>
        )}
      </div>
    
    
    </div>
  );
};

export default AwardTabs;