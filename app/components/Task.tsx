"use client";

import { BsCheckSquare, BsImage, BsThreeDots } from "react-icons/bs";
import Subtask from "./Subtask";
import { AiOutlineCheck, AiOutlineLink } from "react-icons/ai";
import { useState } from "react";

interface TaskProps {
  task: string;
  subtasks?: [string];
}

const Task = function ({ task, subtasks }: TaskProps) {
  const [completed, setCompleted] = useState(false);
  const [showSubtasks, setShowSubtasks] = useState(true);
  return (
    <div className="border relative">
      <div
        className={`${
          completed && "absolute top-0 left-0 opacity-10 bg-black h-full w-full"
        }`}
      ></div>
      <div
        onClick={() => {
          if (!completed) {
            setTimeout(() => {
              setCompleted(true);
            }, 100);
            setShowSubtasks(false);
          } else {
            setTimeout(() => {
              setCompleted(false);
            }, 50);
            setShowSubtasks(true);
          }
        }}
        className={`w-[27.5px] cursor-pointer z-40 h-[27.5px] rounded-full -top-[10px] -right-[10px] text-white  flex items-center absolute
      ${completed ? "bg-secondaryPurple" : "bg-gray500"}
      justify-center`}
      >
        <AiOutlineCheck size={25} />
      </div>
      <div className="px-2 flex items-end cursor-default py-2 border-b font-bold text-md text-gray800 ">
        <p className="w-[95%]">{task.slice(2)}</p>
        <p className="text-sm font-normal text-gray500">(2/2)</p>
      </div>
      <div
        className={` transition-[height]  overflow-y-scroll  ${
          showSubtasks ? "h-[125px] px-2 py-2 border-b" : "h-0"
        } duration-100`}
      >
        {showSubtasks && (
          <>
            {subtasks?.map((subtask, index) => (
              <div key={Math.random() * 100} className="flex  py-1 gap-2">
                <div className="w-[20px] h-[20px] cursor-pointer hover:opacity-80 duration-300 mt-2 text-white bg-gray500  flex items-center justify-center">
                  <AiOutlineCheck size={22.5} />
                </div>
                <p className="text-sm text-gray700">{subtask.slice(2)}</p>
              </div>
            ))}
          </>
        )}
      </div>
      <div className="h-[30px] px-2 py-2 flex items-center justify-between gap-2 ">
        <div className="flex items-center gap-2">
          <div className="flex cursor-default items-center gap-1 text-gray600">
            <AiOutlineLink />
            <span className="text-gray500">(2)</span>
          </div>
          <div className="flex cursor-default items-center gap-1 text-gray600 ">
            <BsImage />
            <span className="text-gray500">(1)</span>
          </div>
        </div>
        <div className="flex items-center justify-center h-[20px] w-[20px] cursor-pointer">
          <BsThreeDots />
        </div>
      </div>
    </div>
  );
};

export default Task;
