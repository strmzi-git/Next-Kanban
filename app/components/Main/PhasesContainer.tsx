import axios from "axios";
import Phase from "../Phase";

const hitApi = async function () {
  try {
    const response = await axios.get("http://127.0.0.1:3000/api/getTasks");
    return response.data.message;
  } catch (err: any) {
    console.log("Error:", err);
  }
};

const PhaseContainer = async function () {
  const response = await hitApi();

  return (
    <div className=" max-h-[80vh] overflow-x-scroll max-w-[100%] overflow-y-scroll flex gap-4 py-4">
      {response.map((phase: any) => (
        <Phase phase={phase} />
      ))}
    </div>
  );
};

export default PhaseContainer;
