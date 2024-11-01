import navy from "../images/navy.png";
import ocean from "../images/ocean.png";
import mint from "../images/mint.png";

import Type from "../components/type";

const Types = () => {
  return (
    <div className="flex gap-6 col-start-2 m-auto">
      <Type
        bgcolor="bg-[#404354]"
        img={navy}
        alt="ur i mint farve"
        className="max-h-20 max-w-20"
      />
      <Type
        bgcolor="bg-[#6ADDCC]"
        img={mint}
        alt="ur i mint farve"
        className="max-h-24 max-w-24"
      />
      <Type
        bgcolor="bg-[#F9CDC4]"
        img={ocean}
        alt="ur i mint farve"
        className="max-h-24 max-w-24"
      />
    </div>
  );
};

export default Types;
