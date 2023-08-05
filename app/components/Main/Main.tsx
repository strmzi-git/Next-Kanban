import MainBody from "./MainBody";
import MainHeader from "./MainHeader";

const Main = function () {
  return (
    <div
      className={`w-full h-full max-w-[100%] 
overflow-hidden
    `}
    >
      <MainHeader />
      <MainBody />
    </div>
  );
};

export default Main;
