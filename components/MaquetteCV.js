import Image from "next/image";
import Maquette from "../public/test-maquette.png";

const MaquetteCV = () => {
  return (
    <div className=" rounded-3xl flex justify-center  flex-col border-2 border-red-500 sm:w-full lg:w-11/12 ">
      <Image
        src={Maquette}
        alt="livre"
        quality={100}
        className=" rounded-3xl   object-cover "
      />
      <div className="  bg-gray-500 rounded-3xl pl-5">
        <h3 className="  text-xl w-full ">Découpage d'une maquette</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default MaquetteCV;
