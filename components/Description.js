import Image from 'next/image'
import developer from "../public/webdev.png"
import Typewriter from "typewriter-effect";
import hadra from "../public/photo-2.png"
import Zoom from "react-reveal/Zoom"

const Description = () => {
    return (
        <div className="  text-white flex justify-center items-center flex-col  opacity-150 ">
            <div className="flex  flex-row bg-opacity-60 items-center justify-around backdrop-filter backdrop-blur-lg">
                <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text w-2/5 
                    bg-gradient-to-t from-white  to-white">
                    N'DIAYE Cheikh El Hadramy
                    <Typewriter
                       
                       options={{
                        strings: ['Développeur web React et NodeJS'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                </h2>
                <Image src={developer} alt="dev image" className="sm:w-11/12 md:w-full" />
            </div>
               
                <div className=" flex flex-col bg-blend-overlay justify-center items-center sm:flex-col lg:flex-row  ">
                    <p className="  bg-gradient-to-l from-gray-500  via-gray-900 to-gray-500 flex justify-center items-center sm:w-11/12 lg:w-2/5  m-1 p-2 border-0 h-50  rounded-3xl text-2xl  text-justify">
                        J'ai découvert le développement web il y a bientôt un peu plus d'une année.
                        Je cherchais à réaliser et obtenir un diplôme de niveau supérieur, pour une meilleure évolution professionnelle.
                        Suite à des recherches sur le web, j'ai découvert le parcours de développeur web.
                        J'ai commencé à m'y intéresser et à suivre des tutoriels sur différentes plateformes (Openclassrooms, Youtube, Udemy etc ...). À présent,
                        je suis à la recherche d'un emploi en tant développeur Web React et Node.js,
                        suite à ma formation diplômante (bac+2) RNCP Niveau 5.
                    </p>
                    <div className=" ml-5">
                        <Zoom>
                        <Image src={hadra} alt="hadra image" className="  rounded-full w-20 h-20 p-10 transform transition-transform hover:rotate-360 duration-1000 ease-in-out cursor-pointer " />
                        </Zoom>
                        
                    </div>
                
            
                </div>
           
            
           
        </div>
       
    );
};

export default Description;

