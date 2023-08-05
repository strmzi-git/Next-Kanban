"use client";
import { AiOutlineFolder, AiOutlinePlusSquare } from "react-icons/ai";
import { useState } from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import SidebarButton from "./SidebarButton";
import { BsLayoutThreeColumns } from "react-icons/bs";
import { ShowSideBarHook } from "../../hooks/showSideBar";
import Button from "../Button";

const Boards = function () {
  const [showDropdown, setShowDropdown] = useState(true);
  const [showDropdown2, setShowDropdown2] = useState(true);
  const sidebarHook = ShowSideBarHook();
  return (
    <div className="flex flex-col">
      <SidebarButton
        functionality={() => {
          console.log("Clicked");
          if (!showDropdown) {
            setShowDropdown(!showDropdown);
            setTimeout(() => {
              setShowDropdown2(!showDropdown2);
            }, 50);
          } else {
            setShowDropdown2(!showDropdown2);
            setTimeout(() => {
              setShowDropdown(!showDropdown);
            }, 300);
          }
        }}
        text="Boards"
        icon={AiOutlineFolder}
      />
      {sidebarHook.isOpen && showDropdown && (
        <div
          className={`${
            showDropdown2 ? "h-[160px]" : "h-[0px]"
          } duration-300 transition-[height] overflow-scroll`}
        >
          <div className="flex items-center gap-2 mt-2 pl-2 text-gray700">
            <BsArrowReturnRight size={20} />
            <SidebarButton text="Project #1" icon={BsLayoutThreeColumns} />
          </div>
          <div className="flex items-center gap-2 mt-2 pl-2 text-gray700">
            <BsArrowReturnRight size={20} />
            <SidebarButton text="Project #2" icon={BsLayoutThreeColumns} />
          </div>

          <div className="flex items-center gap-2 mt-2 pl-2 text-gray700">
            <Button
              props={`w-full ml-[25px] py-2 bg-gray100 text-gray100  pl-12 hover:bg-opacity-90 duration-500 text-lg bg-secondaryPurple
                ${
                  sidebarHook.isOpen
                    ? "h-[45px] rounded-sm"
                    : "rounded-full h-[50px] w-[50px]"
                }
                    `}
              text={"New Board"}
              icon={AiOutlinePlusSquare}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Boards;
