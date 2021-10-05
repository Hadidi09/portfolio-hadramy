import Image from "next/image";
import developer from "../../public/webdev.png";
import Typewriter from "typewriter-effect";
import hadra from "../../public/photo-2.png";
import { Zoom, JackInTheBox } from "react-awesome-reveal";

// component description
const Description = () => {
  return (
    <div className="  text-white flex justify-center items-center flex-col   opacity-150 " id="description">
      <div className="flex  flex-row bg-opacity-60 items-center justify-around backdrop-filter backdrop-blur-lg">
        <h1
          className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text w-3/4 md:w-2/5
                    bg-gradient-to-t from-white  to-white"
        >
          N'DIAYE Cheikh El Hadramy
          <Typewriter
            options={{
              strings: ["Développeur web React et NodeJS"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <Image
          src={developer}
          alt="illustration avec une image de développeur"
          className="w-1/4 sm:w-11/12 md:w-full"
        />
      </div>
      
      <div className=" flex flex-col bg-blend-overlay justify-center items-center sm:flex-col lg:flex-row  ">
        <Zoom cascade fraction={0.20} delay={250} duration={2000} direction={"up"} className="flex justify-center items-center sm:w-11/12 md:w-10/12 lg:w-2/5  " >
          <p className="  bg-gradient-to-br from-gray-500 via-gray-700 to-gray-600 m-1 p-2 border-0 h-50  rounded-3xl text-2xl  text-center ">
            Je m'intéresse au développement web depuis plus de deux ans.
            D'abord en autodidacte, en suivant des tutoriels sur différentes plateformes (Openclassrooms, Youtube, Udemy etc ...).
            Puis j'ai suivi une formation diplômante (bac+2) RNCP Niveau 5 chez Opensclassrooms.
            J'aime apprendre et découvrir de nouvelles techniques. Chaque jour je continue à perfectionner ma pratique.
            Je peux vous aider à réaliser vos projets.
          </p>
        </Zoom>
        <JackInTheBox cascade fraction={0.30} delay={150} duration={1000} className=" ml-5" >
          <div >
            
            <Image
              src={hadra}
              alt="la photo d'Hadramy"
              className="  rounded-full w-20 h-20 p-10 transform transition-transform hover:rotate-360 duration-1000 ease-in-out cursor-pointer "
            />
          </div>
        </JackInTheBox>
      </div>
    </div>
  );
};

export default Description;
