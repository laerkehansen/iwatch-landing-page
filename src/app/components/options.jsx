const Option = () => {
  return (
    <div className="flex flex-col col-start-3">
      <div className="flex flex-col items-center justify-center">
        {/* Første cirkel */}
        <div className="relative flex flex-col items-center mb-8">
          <div className="bg-gray-700 rounded-full w-10 h-10 shadow-lg border-4 border-white hover:w-12 hover:h-12"></div>
          <div className="absolute top-full h-16 w-px bg-transparent border-dotted border-white border-0 border-l-2 opacity-50"></div>
        </div>

        {/* Anden cirkel */}
        <div className="relative flex flex-col items-center mb-8">
          <div className="bg-teal-400 rounded-full w-10 h-10 shadow-lg border-4 border-white hover:w-12 hover:h-12"></div>
          <div className="absolute top-full h-16 w-px bg-transparent border-dotted border-white border-0 border-l-2 opacity-50"></div>
        </div>

        {/* Tredje cirkel */}
        <div className="relative flex flex-col items-center">
          <div className="bg-pink-300 rounded-full w-10 h-10 shadow-lg border-4 border-white hover:w-12 hover:h-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Option;
