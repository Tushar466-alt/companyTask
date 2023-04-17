import React from "react";
import tabs from "./jsons/tabs.json";

function Tabs({setSelectedTab, selectedTab}) {
  return (
    <div className="flex items-center mt-[1.2rem] border-b-2 h-11">
      {tabs.map((item, index) => (
        <div
          key={index}
          onClick={() => setSelectedTab(item.key)}
          className={`w-auto p-6 cursor-pointer h-full flex justify-center items-center ${
            selectedTab === item.key ? "border-b-2 border-blue-500" : ""
          }`}
        >
          <p
            className={`${
              selectedTab === item.key
                ? "text-blue-500 font-semibold"
                : "text-black"
            }`}
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Tabs;
