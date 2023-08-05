"use client";

import Button from "../Button";
import { AiOutlinePieChart } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { TbReport } from "react-icons/tb";
import Boards from "./Boards";
import SidebarButton from "./SidebarButton";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";
import { ShowSideBarHook } from "@/app/hooks/showSideBar";
import { MdOutlineViewTimeline } from "react-icons/md";

const BottomSidebar = function () {
  const [on, setOn] = useState(false);
  const showSideBar = ShowSideBarHook();
  return (
    <div
      className={`w-full py-6 flex  flex-[80%] flex-col justify-between ${
        showSideBar.isOpen ? "px-4" : "px-2"
      } `}
    >
      <div className="flex flex-col gap-2">
        <Boards />
        <div className="w-full bg-white h-[200px] z-50 flex flex-col gap-2 ">
          <SidebarButton text="Analytics" icon={AiOutlinePieChart} />
          <SidebarButton text="Reports" icon={TbReport} />
          <SidebarButton text="Timeline" icon={MdOutlineViewTimeline} />
          <SidebarButton text="Account Settings" icon={FiSettings} />
        </div>
      </div>
      <div className="w-full flex gap-4 ">
        <Button
          text="Logout"
          props={`text-gray100 bg-secondaryPurple 
          ${showSideBar.isOpen ? "w-[55%] h-[40px]" : "h-[50px] w-[50px]"}
          flex items-center pl-12 ${
            showSideBar.isOpen ? "rounded-sm" : "rounded-full"
          }`}
          icon={CiLogout}
        />
        {showSideBar.isOpen && (
          <div
            onClick={() => {
              if (!showSideBar.isOpen) {
                showSideBar.openSidebar();
              }
              setOn(!on);
            }}
            className={`rounded-full h-[40px] px-1 bg-gray500 flex items-center duration-300 transition cursor-pointer w-[35%]
        ${on ? "justify-start" : "justify-end"}
        `}
          >
            <div className="rounded-full bg-secondaryPurple h-[35px] w-[35px]"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BottomSidebar;
