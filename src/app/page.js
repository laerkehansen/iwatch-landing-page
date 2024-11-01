import Image from "next/image";
import mint from "./images/mint.png";
import navy from "./images/navy.png";
import ocean from "./images/ocean.png";
import Nav from "./components/nav";
import Button from "./components/button";
import Arrow from "./components/arrow";
import Types from "./components/types";
import Option from "./components/options";

export default function Home() {
  return (
    <>
      <main className="grid grid-cols-[0.5fr_5fr_0.5fr]">
        <div className="col-start-2">
          <Nav />
          <section className="grid grid-cols-[1fr_1fr_0.1fr] max-w-screen-xl mx-auto max-h-fit items-center">
            <h1 className="text-6xl col-start-1 col-end-2">
              <span className="font-bold">The Perfect Moment</span> Between Past
              And Future.
            </h1>
            <Image
              src={navy}
              alt="ur i navy farve"
              className="col-start-2 m-auto"
            />
            <Option className="col-start-3" />
          </section>
          <Button />
          <div className="grid grid-cols-[1fr_1fr_0.1fr]">
            <Types />
            <Arrow />
          </div>
        </div>
      </main>
    </>
  );
}
