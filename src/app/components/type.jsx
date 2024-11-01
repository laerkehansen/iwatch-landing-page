import Image from "next/image";
const Type = ({ bgcolor, img }) => {
  return (
    <>
      <section className="grid grid-cols-1 w-fit grid-rows-4">
        <div className=" grid grid-rows-subgrid grid-cols-subgrid col-span-full row-span-full">
          <Image
            src={img}
            alt="billede af ur"
            className="max-w-24 row-start-1 row-end-4 col-span-full z-10 justify-self-center"
          />

          <div
            className={`w-28 h-[4.5rem] ${bgcolor} row-start-2 row-end-5 col-start-1 rounded-lg`}
          ></div>
        </div>
      </section>
    </>
  );
};

export default Type;
