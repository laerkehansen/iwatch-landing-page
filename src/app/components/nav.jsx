import { ImAppleinc } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import Navlinks from "../components/navlinks";

const Nav = () => {
  return (
    <nav className=" text-white flex col-span-full place-content-evenly items-center py-8">
      <ImAppleinc className="w-12 h-12" />
      <ul className="flex list-none gap-14 justify-center text-white text-lg">
        <Navlinks navtext={"Mac"} />
        <Navlinks navtext={"iphone"} />
        <Navlinks navtext={"ipad"} />
        <Navlinks navtext={"iwatch"} />
        <Navlinks navtext={"Support"} />
      </ul>
      <div className="flex gap-2">
        <FiSearch className="w-6 h-6" />
        <FiShoppingBag className="border-l-2 divide-solid border-white pl-2 w-6 h-6" />
      </div>
    </nav>
  );
};

export default Nav;
