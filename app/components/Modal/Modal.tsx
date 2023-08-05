import ModalHeader from "./ModalHeader";
import SocialLogin from "./SocialLogin";

interface ModalProps {}

const Modal = function () {
  return (
    <div className="">
      {/* BACKGROUND */}
      <div className="absolute z-40 bg-opacity-70 top-0 left-0 bg-gray500 w-[100%] h-[100%]"></div>
      {/* MODAL WINDOW */}
      <div className="absolute py-4 px-4 top-[50%] left-[50%] transform -translate-y-[50%] -translate-x-[50%] z-50 rounded-md shadow-sm bg-gray100  w-[450px]">
        <ModalHeader
          title="Welcome to KanbanAi"
          subtitle="To get started, sign in!"
        />
        <SocialLogin />
      </div>
    </div>
  );
};

export default Modal;
