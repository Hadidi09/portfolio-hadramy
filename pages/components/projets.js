import Carousel from "./Carousel";
import Image from "next/image";
import Raquette from "../../public/test-maquette.png";
import OrinocoJs from "../../public/orinocojs.png";
import MyFood from "../../public/myfood.png";
import Groupomania from "../../public/groupomania.png";
import Sopiquant from "../../public/sopiquant.png";
import Chouette from "../../public/chouette-agence.png";
import Link from "next/link";

const Projets = () => {
  return (
    <div className="contentprojet flex flex-col justify-center pt-6  lg:items-center " id="projets">
      
      <div className="flex justify-center">
        <h2 className=" bg-gray-800 text-white text-2xl rounded-3xl my-8 px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-gray-900  ">
          Mes Projets
        </h2>
      </div>

      <div className="card-maquette  md:grid grid-cols-2  gap-8 sm:flex flex-col justify-center items-center sm:my-8">
        <div className="cards-contents bg-stars-sky bg-cover p-10 m-6 w-max md:w-11/12 md:m-1 lg:w-max lg:m-6  cursor-pointer rounded-3xl shadow-xl transiton duration-1000 ease-in-out transform hover:scale-110  ">
          <div className="content-maquette  ">
            <Image
              src={Raquette}
              alt="maquette responsive"
              width={300}
              height={250}
              quality={100}
              className=" rounded-3xl   object-cover "
            />

            <div className="flex  p-1 flex-col">
              <h3 className="w-72  h-36 text-2xl text-white ">
                Transformer une maquette en site web
              </h3>
              <div className="source flex flex-row w-full">
                <h4 className=" w-max button bg-gray-700 text-white  p-4 shadow-2xl mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 focus:ring-opacity-25 focus:ring-gray-500  ">
                  <Link href="https://github.com/Hadidi09/projet_cv">
                    <a target="_blank" rel="noopener" >code source</a>
                  </Link>
                </h4>
                <h4 className="w-max bg-gray-700 text-white  p-4 shadow-2xl  mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 ">
                 <Link href="https://hadidi09.github.io/projet_cv/">
                    <a target="_blank" rel="noopener" >lien</a>
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="cards-contents bg-stars-sky bg-cover p-10 m-6 w-max md:w-11/12 md:m-1 lg:w-max lg:m-6  cursor-pointer rounded-3xl shadow-xl transiton duration-1000 ease-in-out transform hover:scale-110 ">
          
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
                <h3 className="w-72  h-36 text-2xl text-white ">
                  OHMYFOOD <br /> Dynamiser une page web avec des animations CSS
                </h3>
                <div className="source flex flex-row w-full">
                  <h4 className=" w-max button bg-gray-700 text-white  p-4 shadow-2xl mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 focus:ring-opacity-25 focus:ring-gray-500  ">
                    <Link href="https://github.com/Hadidi09/N-DIAYE-cheikh-el-Hadramy_3_01-07-2020">
                      <a target="_blank" rel="noopener" >code source</a>
                    </Link>
                      
                  </h4>
                  <h4 className="w-max bg-gray-700 text-white  p-4 shadow-2xl  mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 ">
                    <Link href="https://hadidi09.github.io/N-DIAYE-cheikh-el-Hadramy_3_01-07-2020/">
                      <a target="_blank" rel="noopener" >lien</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          
        </div>
        <div className="cards-contents bg-stars-sky bg-cover p-10 m-6 w-max md:w-11/12 md:m-1 lg:w-max lg:m-6  cursor-pointer rounded-3xl shadow-xl transiton duration-1000 ease-in-out transform hover:scale-110 ">
          
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
                <h3 className="w-72  h-36 text-2xl text-white ">
                  Chouette Agence <br /> Optimiser un site web existant SEO
                </h3>
                <div className="source flex flex-row w-full">
                  <h4 className=" w-max button bg-gray-700 text-white  p-4 shadow-2xl mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 focus:ring-opacity-25 focus:ring-gray-500  ">
                    <Link href="https://github.com/Hadidi09/Chouette-version-2">
                      <a target="_blank" rel="noopener" >code source</a>
                    </Link>
                  </h4>
                  <h4 className="w-max bg-gray-700 text-white  p-4 shadow-2xl  mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 ">
                    <Link href="https://hadidi09.github.io/Chouette-version-2/">
                      <a target="_blank" rel="noopener" >lien</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          
        </div>
        <div className="cards-contents bg-stars-sky bg-cover p-10 m-6 w-max md:w-11/12 md:m-1 lg:w-max lg:m-6  cursor-pointer rounded-3xl shadow-xl transiton duration-1000 ease-in-out transform hover:scale-110 ">
          
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
                <h3 className="w-72  h-36 text-2xl text-white">ORINOCO <br /> Site E-commerce</h3>
                <div className="source flex flex-row w-full">
                  <h4 className=" w-max button bg-gray-700 text-white  p-4 shadow-2xl mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 focus:ring-opacity-25 focus:ring-gray-500  ">
                  <Link href="https://github.com/Hadidi09/Projet_5_Orinoco_JS">
                    <a target="_blank" rel="noopener" >code source</a>
                  </Link>
                  </h4>
                  <h4 className="w-max bg-gray-700 text-white  p-4 shadow-2xl  mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 ">
                    <Link href="https://projet-5-orinoco-js.vercel.app/">
                      <a target="_blank" rel="noopener" >lien</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          
        </div>
        <div className="cards-contents bg-stars-sky bg-cover p-10 m-6 w-max md:w-11/12 md:m-1 lg:w-max lg:m-6  cursor-pointer rounded-3xl shadow-xl transiton duration-1000 ease-in-out transform hover:scale-110 ">
          
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
                <h3 className="w-72  h-36 text-2xl text-white ">
                  So Pekocko  API sécurisée<br /> pour une application
                  d'avis gastronomique
                </h3>
                <div className="source flex flex-row w-full">
                  <h4 className=" w-max button bg-gray-700 text-white  p-4 shadow-2xl mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 focus:ring-opacity-25 focus:ring-gray-500  ">
                    <Link href="https://github.com/Hadidi09/P6-sopekocko">
                      <a target="_blank" rel="noopener" >code source</a>
                    </Link>
                  </h4>
                  <h4 className="w-max bg-gray-700 text-white  p-4 shadow-2xl  mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 ">
                    <Link href="https://github.com/Hadidi09/P6-sopekocko">
                      <a target="_blank" rel="noopener" >lien</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          
        </div>
        <div className="cards-contents bg-stars-sky bg-cover p-10 m-6 w-max md:w-11/12 md:m-1 lg:w-max lg:m-6  cursor-pointer rounded-3xl shadow-xl transiton duration-1000 ease-in-out transform hover:scale-110 ">
          
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
                <h3 className="w-72  h-36 text-2xl text-white ">
                  Groupomania <br /> Réseaux social d'entreprise
                </h3>
                <div className="source flex flex-row w-full">
                  <h4 className=" w-max button bg-gray-700 text-white  p-4 shadow-2xl mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 focus:ring-opacity-25 focus:ring-gray-500  ">
                    <Link href="https://github.com/Hadidi09/Projet7-grouppomania">
                      <a target="_blank" rel="noopener" >code source</a>
                    </Link>
                  </h4>
                  <h4 className="w-max bg-gray-700 text-white  p-4 shadow-2xl  mx-2 rounded-3xl text-2xl hover:bg-gray-100 hover:text-gray-900 ">
                    <Link href="https://github.com/Hadidi09/Projet7-grouppomania">
                      <a target="_blank" rel="noopener" >lien</a>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          
        </div>
      </div>
      <div className="flex justify-center">
        <h2 className=" bg-gray-800 text-white text-2xl rounded-3xl my-8 px-4 py-2 cursor-pointer hover:bg-gray-100 hover:text-gray-900  ">
          Mon CV
        </h2>
      </div>
      
    </div>
  );
};

export default Projets;
