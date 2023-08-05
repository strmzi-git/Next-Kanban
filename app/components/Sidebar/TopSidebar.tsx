"use client";

import { ShowSideBarHook } from "../../hooks/showSideBar";
import Button from "../Button";

const TopSidebar = function () {
  const sidebarHook = ShowSideBarHook();
  return (
    <div
      className={` flex items-center justify-start  border-b
${sidebarHook.isOpen ? "h-auto py-4" : " h-[80px]"}
`}
    >
      <div className={`w-full px-2 ${sidebarHook.isOpen ? "px-4" : "px-2"} `}>
        <div
          className={` ${
            !sidebarHook.isOpen && "justify-center"
          } flex items-center gap-4 mb-[12px]`}
        >
          <div className="w-[50px] h-[50px] rounded-full bg-rose-400"></div>
          {sidebarHook.isOpen && (
            <div className="">
              <h3>Angelina Seiler</h3>
              <p className="text-sm font-light opacity-50 ">Free Tier</p>
            </div>
          )}
        </div>
        {sidebarHook.isOpen && (
          <Button
            text="Upgrade to Premium"
            props="text-white py-[8px] text-center text-md font-light tracking-[0.5px] rounded-sm  cursor-pointer hover:bg-opacity-90 duration-300 bg-accentRose w-full"
          />
        )}
      </div>
    </div>
  );
};

export default TopSidebar;
