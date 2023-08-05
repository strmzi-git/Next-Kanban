import { BsChevronRight, BsThreeDots } from "react-icons/bs";

const MainHeader = function () {
  return (
    <div className="w-full px-2 flex items-center justify-between md:px-6 h-[60px] border-b ">
      <p className="text-sm flex items-center gap-1 text-gray700">
        Board
        <span className="text-base flex items-center gap-1 text-gray900">
          <BsChevronRight size={15} />
          Project #1
        </span>
      </p>
      <div className="h-[30px] cursor-pointer w-[30px] flex items-center justify-center">
        <BsThreeDots size={20} />
      </div>
    </div>
  );
};

export default MainHeader;
