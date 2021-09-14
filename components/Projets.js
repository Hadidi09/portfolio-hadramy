import Carousel from "./Carousel";
//import MaquetteCV from "./MaquetteCV";
import Image from "next/image";
import raquette from "../public/test-maquette.png";
import OrinocoJs from "../public/orinocojs.png";
import MyFood from "../public/myfood.png";
import Groupomania from "../public/groupomania.png";
import Sopiquant from "../public/sopiquant.png";
import Chouette from "../public/chouette-agence.png";
import Fade from "react-reveal/Fade";
import Resume from "./Resume";
import Competences from "./Competences";

const Projets = () => {
  return (
    <div className="contentprojet flex flex-col justify-center pt-6  lg:items-center ">
      <Competences />
      <div className="flex justify-center">
        <h2 className=" bg-gray-800 text-white rounded-3xl px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-gray-900  ">
          Mes Projets
        </h2>
      </div>

      <div className="card-maquette md:grid grid-cols-2 gap-1 sm:flex flex-col items-center">
        <div className="cards-contents bg-gray-400 p-10 m-6 w-max md:w-11/12 md:m-1 lg:w-max lg:m-6  cursor-pointer rounded-3xl shadow-xl transiton duration-1000 ease-in-out transform hover:scale-110 ">
          <div className="content-maquette  ">
            <Image
              src={raquette}
              alt="maquette responsive"
              width={300}
              height={250}
              quality={100}
              className=" rounded-3xl   object-cover "
            />

            <div className="flex  p-1 flex-col">
              <h4 className="w-80 text-2xl ">
                Transformer une maquette en site web
              </h4>
              <div className="source flex flex-row w-full">
                <h5 className=" w-max button bg-gray-700 text-white  p-4 shadow-2xl mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 focus:ring-opacity-25 focus:ring-gray-500  ">
                  code source
                </h5>
                <h5 className="w-max bg-gray-700 text-white  p-4 shadow-2xl  mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 ">
                  lien
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="cards-contents bg-gray-400 p-10 m-6 w-max md:w-11/12 md:m-1 lg:w-max lg:m-6  cursor-pointer rounded-3xl shadow-xl transiton duration-1000 ease-in-out transform hover:scale-110 ">
          <Fade right>
            <div className="content-maquette  ">
              <Image
                src={MyFood}
                alt="oh my food site web"
                width={300}
                height={250}
                quality={100}
                className=" rounded-3xl   object-cover "
              />

              <div className="flex  p-1 flex-col">
                <h4 className="w-80 text-xl ">
                  OHMYFOOD Dynamiser une page web avec des animations CSS
                </h4>
                <div className="source flex flex-row w-full">
                  <h5 className=" w-max button bg-gray-700 text-white  p-4 shadow-2xl mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 focus:ring-opacity-25 focus:ring-gray-500  ">
                    code source
                  </h5>
                  <h5 className="w-max bg-gray-700 text-white  p-4 shadow-2xl  mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 ">
                    lien
                  </h5>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="cards-contents bg-gray-400 p-10 m-6 w-max md:w-11/12 md:m-1 lg:w-max lg:m-6  cursor-pointer rounded-3xl shadow-xl transiton duration-1000 ease-in-out transform hover:scale-110 ">
          <Fade right>
            <div className="content-maquette  ">
              <Image
                src={Chouette}
                alt="la chouette agence SEO"
                width={300}
                height={250}
                quality={100}
                className=" rounded-3xl   object-cover "
              />

              <div className="flex  p-1 flex-col">
                <h4 className="w-80 text-xl ">
                  Chouette Agence Optimiser un site web existant SEO
                </h4>
                <div className="source flex flex-row w-full">
                  <h5 className=" w-max button bg-gray-700 text-white  p-4 shadow-2xl mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 focus:ring-opacity-25 focus:ring-gray-500  ">
                    code source
                  </h5>
                  <h5 className="w-max bg-gray-700 text-white  p-4 shadow-2xl  mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 ">
                    lien
                  </h5>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="cards-contents bg-gray-400 p-10 m-6 w-max md:w-11/12 md:m-1 lg:w-max lg:m-6  cursor-pointer rounded-3xl shadow-xl transiton duration-1000 ease-in-out transform hover:scale-110 ">
          <Fade right>
            <div className="content-maquette  ">
              <Image
                src={OrinocoJs}
                alt="site E-commerce Orinoco"
                width={300}
                height={250}
                quality={100}
                className=" rounded-3xl   object-cover "
              />

              <div className="flex  p-1 flex-col">
                <h4 className="w-80 text-xl ">ORINOCO Site E-commerce</h4>
                <div className="source flex flex-row w-full">
                  <h5 className=" w-max button bg-gray-700 text-white  p-4 shadow-2xl mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 focus:ring-opacity-25 focus:ring-gray-500  ">
                    code source
                  </h5>
                  <h5 className="w-max bg-gray-700 text-white  p-4 shadow-2xl  mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 ">
                    lien
                  </h5>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="cards-contents bg-gray-400 p-10 m-6 w-max md:w-11/12 md:m-1 lg:w-max lg:m-6  cursor-pointer rounded-3xl shadow-xl transiton duration-1000 ease-in-out transform hover:scale-110 ">
          <Fade right>
            <div className="content-maquette  ">
              <Image
                src={Sopiquant}
                alt="API de sauce piquante "
                width={300}
                height={250}
                quality={100}
                className=" rounded-3xl   object-cover "
              />

              <div className="flex  p-1 flex-col">
                <h4 className="w-80 text-xl ">
                  SoPEKOCKO Sauce Piquante API sécurisée pour une application
                  d'avis gastronomique
                </h4>
                <div className="source flex flex-row w-full">
                  <h5 className=" w-max button bg-gray-700 text-white  p-4 shadow-2xl mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 focus:ring-opacity-25 focus:ring-gray-500  ">
                    code source
                  </h5>
                  <h5 className="w-max bg-gray-700 text-white  p-4 shadow-2xl  mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 ">
                    lien
                  </h5>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <div className="cards-contents bg-gray-400 p-10 m-6 w-max md:w-11/12 md:m-1 lg:w-max lg:m-6  cursor-pointer rounded-3xl shadow-xl transiton duration-1000 ease-in-out transform hover:scale-110 ">
          <Fade right>
            <div className="content-maquette  ">
              <Image
                src={Groupomania}
                alt="réseau social d'entreprise"
                width={300}
                height={250}
                quality={100}
                className=" rounded-3xl   object-cover "
              />

              <div className="flex  p-1 flex-col">
                <h4 className="w-80 text-xl ">
                  Groupomania Réseaux social d'entreprise
                </h4>
                <div className="source flex flex-row w-full">
                  <h5 className=" w-max button bg-gray-700 text-white  p-4 shadow-2xl mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 focus:ring-opacity-25 focus:ring-gray-500  ">
                    code source
                  </h5>
                  <h5 className="w-max bg-gray-700 text-white  p-4 shadow-2xl  mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 ">
                    lien
                  </h5>
                </div>
              </div>
            </div>
          </Fade>
        </div>

        {/* <MaquetteCV />
                <MaquetteCV />
                <MaquetteCV />
                <MaquetteCV /> */}
        {/* <Carousel /> */}
      </div>
      <div className="flex justify-center">
        <h2 className=" bg-gray-800 text-white rounded-3xl px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-gray-900  ">
          Mon CV
        </h2>
      </div>
      <Resume />
    </div>
  );
};

export default Projets;
