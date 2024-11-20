import React from "react";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  return (
    <div
      className=" sm:flex flex-col   text-center   pr-28 sm:mr-0  my-5  lg:ml-2  lg:flex-row   "
      id="resume"
    >
      <Fade cascade triggerOnce direction={"right"}>
        <div className="resume flex items-start  flex-col md:col-start-2 md:col-span-3 lg:mr-80 ">
          <h3 className="text-2xl text-white pl-2 mb-2">Formation</h3>
          <div className="rounded-6xl bg-gray-900 text-white w-6 ">
            <FontAwesomeIcon icon={faAward} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5  w-2 border-white">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden ">
              <span className="years mr-2 ">2022-2024 Pontarlier</span>{" "}
              <span className="  p-1 bg-purple-500  rounded-3xl">
                {" "}
                Opensclassrooms
              </span>{" "}
              <br />
              <span className="text-2xl underline my-2 spantitle ">
                Développeur d’application PHP/SYMFONY (Bac +3/4)
              </span>
              <br />
              Intégrer la maquette du site d’une agence web (HTML + CSS),
              Dynamiser un site web avec des animations CSS, Optimiser un site
              web existant(SEO), Construire un site E-Commerce. Création d'un
              réseau social d'entreprise, Construire une Api sécurisée pour une
              application d'avis gastronomique.
            </p>
          </div>
          <div className="rounded-6xl bg-gray-900 text-white w-6 ">
            <FontAwesomeIcon icon={faAward} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5  w-2 border-white">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden ">
              <span className="years mr-2 ">2020-2021 Pontarlier</span>{" "}
              <span className="  p-1 bg-purple-500  rounded-3xl">
                {" "}
                Opensclassrooms
              </span>{" "}
              <br />
              <span className="text-2xl underline my-2 spantitle ">
                Développeur web
              </span>
              <br />
              Intégrer la maquette du site d’une agence web (HTML + CSS),
              Dynamiser un site web avec des animations CSS, Optimiser un site
              web existant(SEO), Construire un site E-Commerce. Création d'un
              réseau social d'entreprise, Construire une Api sécurisée pour une
              application d'avis gastronomique.
            </p>
          </div>
          <div className="rounded-6xl bg-gray-900 text-white w-6 ">
            <FontAwesomeIcon icon={faAward} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5  w-2 border-white">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden">
              <span className="mr-2 years">2011-2013 Dijon</span>{" "}
              <span className="mr-2 bg-purple-500 p-1   rounded-3xl">
                Université de Bourgogne
              </span>{" "}
              <br />
              <span className="text-2xl underline my-2 spantitle">
                1ère année Licence d'Histoire
              </span>{" "}
              <br />
              Une culture générale reposant sur: une bonne connaissance de
              toutes les périodes et de toutes les spécialités de l’histoire.
            </p>
          </div>
          <div className="rounded-6xl bg-gray-900 text-white w-6  ">
            <FontAwesomeIcon icon={faAward} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden">
              <span className="mr-2 years">2010-2011 Dijon</span>{" "}
              <span className="mr-2 bg-purple-500 p-1   rounded-3xl">
                Université de Bourgogne
              </span>{" "}
              <br />
              <span className="text-2xl underline my-2 spantitle">
                1ère année Licence STAPS
              </span>{" "}
              <br />
              Psychologie, Sociologie, Histoire du sport, Natation, Gymnastique,
              Athlétisme, Sports Collectifs, Danse.
            </p>
          </div>
          <div className="rounded-6xl bg-gray-900 text-white w-6  ">
            <FontAwesomeIcon icon={faAward} />
          </div>
        </div>
      </Fade>
      <Fade triggerOnce cascade direction={"left"}>
        <div className="resume flex items-start flex-col md:col-start-5  lg:mr-2">
          <h3 className="text-2xl text-white w-80 pr-5 mb-2">
            Expérience professionnelle
          </h3>
          <div className="rounded-6xl bg-gray-900 text-white w-6 ">
            <FontAwesomeIcon icon={faFileContract} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white ">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden">
              <span className="mr-2 years">09/2022-09/2024 Pontarlier</span>{" "}
              <span className="mr-2 bg-purple-500 p-1   rounded-3xl">
                Développeur concepteur de logiciel (Alternance){" "}
              </span>{" "}
              <br />
              <span className="text-2xl underline my-2 spantitle">
                Schrader Pacific Advanced Valves
              </span>{" "}
              <br />
              J’ai été chargé de corriger les bugs lors de la montée en version
              du site E-commerce, basé sur la plateforme. Tout en apportant des
              améliorations en termes d'expérience utilisateur. J’ai développé
              une application de gestion des paniers pour la machine à
              départiculer, en utilisant PHP en adoptant une architecture MVC
              avec une base de données SQL pour les requêtes. J’ai contribué au
              projet Datamatrix, qui vise à transformer du texte en code-barres
              de type QR code. Gestion du GitLab local de l'entreprise.
              FORMATION Openclassrooms Développeur d’application PHP/SYMFONY
              (Bac +4) 2022 - 2024 Openclassrooms Développeur Web (Bac +2) 2020
              - 2021 1ère année Licence d'Histoire Université de Bourgogne
              Rédaction d’une documentation détaillée sur l'utilisation de Git
              au sein de l’entreprise. Implémentation de PG CRON.
            </p>
          </div>
          <div className="rounded-6xl bg-gray-900 text-white w-6  ">
            <FontAwesomeIcon icon={faFileContract} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden">
              <span className="mr-2 years">06/2022-07/2022 </span>{" "}
              <span className="mr-2 bg-purple-500 p-1   rounded-3xl">
                Développeur web React JS (Stage)
              </span>{" "}
              <br />
              <span className="text-2xl underline my-2 spantitle">
                Houmadev · Online Business Developer
              </span>{" "}
              <br />
              Participer à l'élaboration du projet du site E-commerce. En
              utilisant les technologies suivantes : React JS,
              Typescript,material ui, Axios ,Redux.
            </p>
          </div>
          <div className="rounded-6xl bg-gray-900 text-white w-6  ">
            <FontAwesomeIcon icon={faFileContract} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden">
              <span className="mr-2 years">05/2022-05/2022 Pontarlier</span>{" "}
              <span className="mr-2 bg-purple-500 p-1   rounded-3xl">
                Stage Design Sprint Pôle Emploi (La bonne boîte){" "}
              </span>{" "}
              <br />
              <span className="text-2xl underline my-2 spantitle">
                PimpMyApp{" "}
              </span>{" "}
              <br />
              Participation active à toutes les étapes du Design Sprint :
              définition des objectifs, identification des opportunités
              d'amélioration, génération d'idées par brainstorming, création de
              wireframes et d'esquisses détaillées, prise de décision
              collective, prototypage avec focus sur l'UX et l'accessibilité, et
              conduite de tests utilisateurs.
            </p>
          </div>
          <div className="rounded-6xl bg-gray-900 text-white w-6  ">
            <FontAwesomeIcon icon={faFileContract} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden">
              <span className="mr-2 years">01/2022-01/2022 Pontarlier</span>{" "}
              <span className="mr-2 bg-purple-500 p-1   rounded-3xl">
                Stage Développeur PHP
              </span>{" "}
              <br />
              <span className="text-2xl underline my-2 spantitle">
                LOZAKO
              </span>{" "}
              <br />
              Contribution au développement et à l'amélioration du logiciel de
              l'entreprise. (Programmation PHP / JavaScript / HTML-CSS).
            </p>
          </div>
          <div className="rounded-6xl bg-gray-900 text-white w-6  ">
            <FontAwesomeIcon icon={faFileContract} />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Resume;
