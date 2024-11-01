const Navlink = ({ navtext }) => {
  return (
    <a
      href="#"
      className="hover:bg-white px-6 py-2 rounded-full hover:text-[#5498c2]"
    >
      <li className>{navtext}</li>
    </a>
  );
};

export default Navlink;
