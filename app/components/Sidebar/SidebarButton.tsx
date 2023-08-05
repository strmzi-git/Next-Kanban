import { IconType } from "react-icons";
import Button from "../Button";
import { ShowSideBarHook } from "../../hooks/showSideBar";

interface SidebarButtonProps {
  text: string;
  functionality?: () => void;
  icon?: IconType;
}

const SidebarButton: React.FC<SidebarButtonProps> = function ({
  text,
  functionality,
  icon: Icon,
}) {
  const sidebarHook = ShowSideBarHook();
  return (
    <Button
      functionality={functionality}
      props={`w-full py-2 bg-gray100 text-gray700  pl-12 hover:bg-gray300 duration-500 text-lg
      ${
        sidebarHook.isOpen
          ? "h-[45px] rounded-sm"
          : "rounded-full h-[50px] w-[50px]"
      }
      `}
      text={text}
      icon={Icon}
    />
  );
};

export default SidebarButton;
