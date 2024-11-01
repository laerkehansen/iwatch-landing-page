import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

const Arrow = () => {
  return (
    <div className="flex items-end col-start-1">
      <IoIosArrowRoundBack className="hover:bg-white" />
      <h3>1</h3>
      <IoIosArrowRoundForward className="hover:bg-white rounded-sm" />
    </div>
  );
};

export default Arrow;
