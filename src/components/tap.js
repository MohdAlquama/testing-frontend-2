import { useState } from "react";
import Register from "./register";
import Login from "./login";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      {/* Tab Buttons */}
      <div className="flex border-b">
        {["tab1", "tab2"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 border-b-2 ${
              activeTab === tab ? "border-blue-500 font-bold" : "border-transparent"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 border">
        {activeTab === "tab1" && <Login/>}
        {activeTab === "tab2" && <Register/> }
      </div>
    </div>
  );
};

export default Tabs;
