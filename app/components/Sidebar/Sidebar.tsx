"use client";

import { ShowSideBarHook } from "../../hooks/showSideBar";
import BottomSidebar from "./BottomSidebar";
import TopSidebar from "./TopSidebar";

const Sidebar = function () {
  const sidebarHook = ShowSideBarHook();

  return (
    <div
      className={`h-[100vh] z-30 flex flex-col
      transition-[width] duration-500
      ${sidebarHook.isOpen ? "min-w-[265px] " : "w-[70px]"}
      bg-white border-r border-opacity-50`}
    >
      <TopSidebar />
      <BottomSidebar />
    </div>
  );
};
export default Sidebar;
