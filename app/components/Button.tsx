import { IconType } from "react-icons";
import { ShowSideBarHook } from "../hooks/showSideBar";

interface ButtonProps {
  props: string;
  text: string;
  functionality?: () => void;
  icon?: IconType;
}

const Button = function ({
  props,
  text,
  functionality,
  icon: Icon,
}: ButtonProps) {
  const sidebarHook = ShowSideBarHook();
  return (
    <button
      onClick={functionality}
      className={`${props} ${Icon && "flex items-center relative"}`}
    >
      {Icon && (
        <div
          className={`absolute ${
            !sidebarHook.isOpen && "-translate-x-[50%] left-[50%] "
          } top-[50%] tranform -translate-y-[50%]  left-2`}
        >
          <Icon size={27.5} />
        </div>
      )}
      {sidebarHook.isOpen && text}
    </button>
  );
};

export default Button;
