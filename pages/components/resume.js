import React from "react";
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";


const Resume = () => {
  return (
    <div className=" sm:flex flex-col   text-center   pr-28 sm:mr-0  my-5  lg:ml-60  lg:flex-row   " id="resume">
      <Fade cascade fraction={0.20} direction={"left"}>
        <div className="resume flex items-start  flex-col md:col-start-2 md:col-span-3 lg:mr-80 ">
          <h3 className="text-2xl text-white mb-2">Formation</h3>
          <div className="rounded-6xl bg-gray-900 text-white w-6 ">
            <FontAwesomeIcon icon={faAward} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5  w-2 border-white">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden ">
             <span className="years mr-2 ">2020-2021 Pontarlier</span> <span className="  bg-gray-900 p-1    text-center rounded-3xl"> Opensclassrooms</span>  <br />
              <span className="text-2xl underline my-2 ">Développeur web</span>
              <br />
              Intégrer la maquette du site d’une agence web (HTML + CSS),
              Dynamiser un site web avec des animations CSS, Optimiser un site web
              existant(SEO), Construire un site E-Commerce. Création d'un réseau
              social d'entreprise, Construire une Api sécurisée pour une
              application d'avis gastronomique.
            </p>
          </div>
          <div className="rounded-6xl bg-gray-900 text-white w-6 ">
            <FontAwesomeIcon icon={faAward} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5  w-2 border-white">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden">
            <span className="mr-2 years">2011-2013 Dijon</span>   <span className="mr-2  bg-gray-900 p-1   rounded-3xl">Université de Bourgogne</span> <br />
              <span className="text-2xl underline my-2">1ère année Licence d'Histoire</span> <br />
              Une culture générale reposant sur: une bonne connaissance de toutes
              les périodes et de toutes les spécialités de l’histoire.
            </p>
          </div>
          <div className="rounded-6xl bg-gray-900 text-white w-6  ">
            <FontAwesomeIcon icon={faAward} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden">
             <span className="mr-2 years">2010-2011 Dijon</span> <span className="mr-2  bg-gray-900 p-1   rounded-3xl">Université de Bourgogne</span> <br /> 
              <span className="text-2xl underline my-2">1ère année Licence d'Histoire</span> <br />
              Psychologie, Sociologie, Histoire du sport, Natation, Gymnastique,
              Athlétisme, Sports Collectifs, Danse.
            </p>
          </div>
          <div className="rounded-6xl bg-gray-900 text-white w-6  ">
            <FontAwesomeIcon icon={faAward} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden">
             <span className="mr-2 years">2009-2010 Orléans</span>  <span className="mr-2  bg-gray-900 p-1   rounded-3xl">Université d'Orléans</span>  <br />
              <span className="text-2xl underline my-2">
                1ère année Licence d'Histoire{" "}
              </span>{" "}
              <br />
              Une culture générale reposant sur: une bonne connaissance de toutes
              les périodes et de toutes les spécialités de l’histoire.
            </p>
          </div>
          <div className="rounded-6xl bg-gray-900 text-white w-6  ">
            <FontAwesomeIcon icon={faAward} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden">
             <span className="mr-2 years">2008-2009 Nouakchott</span> <span className="mr-2  bg-gray-900 p-1   rounded-3xl">Lycée Cheikh Moussa</span> <br /> 
              <span className="text-2xl underline my-2">Baccalauréat Général</span> <br />
              Bac L
            </p>
          </div>
        </div>
      </Fade>
      <Fade cascade  direction={"right"}>
        <div className="resume flex items-start flex-col md:col-start-5  lg:mr-80   ">
          <h3 className="text-2xl text-white w-72 mb-2">
            Expérience professionnelle
          </h3>
          <div className="rounded-6xl bg-gray-900 text-white w-6 ">
            <FontAwesomeIcon icon={faFileContract} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden">
             <span className="mr-2 years">2020-2020 Chaffois</span> <span className="mr-2  bg-gray-900 p-1   rounded-3xl">Ouvrier de carrière </span> <br /> 
              <span className="text-2xl underline my-2">
                Chez Carrière de chaffois
              </span>{" "}
              <br />
              Assistance à la surveillance et entretien des installations de
              concassage.
            </p>
          </div>
          <div className="rounded-6xl bg-gray-900 text-white w-6  ">
            <FontAwesomeIcon icon={faFileContract} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden">
             <span className="mr-2 years">2019-2019 Les fins/Levier</span> <span className="mr-2  bg-gray-900 p-1   rounded-3xl">Manoeuvre Paysagiste</span> <br />  
              <span className="text-2xl underline my-2">
                Chez Val de Morteau Paysagiste/Dole Paysage
              </span>{" "}
              <br />
              Taille, Tonte, Débroussaillage, Désherbage Plantation,
              Engazonnement, Pavage, Dallage, Pose de pierres, Clôtures.
            </p>
          </div>
          <div className="rounded-6xl bg-gray-900 text-white w-6  ">
            <FontAwesomeIcon icon={faFileContract} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden">
             <span className="mr-2 years">2018-2019 Pontarlier</span> <span className="mr-2  bg-gray-900 p-1   rounded-3xl">Manoeuvre Chantier </span> <br /> 
              <span className="text-2xl underline my-2">
                Chez INEO INFRACOM/ Zuliani TP/ Colas/ Vermot TP{" "}
              </span>{" "}
              <br />
              Aide à la pose de tube pour la fibre, Aide à la pose de chambre,
              Port de charges lourdes, Enrobés, Canalisations.
            </p>
          </div>
          <div className="rounded-6xl bg-gray-900 text-white w-6  ">
            <FontAwesomeIcon icon={faFileContract} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden">
            <span className="mr-2 years">2017-2018 Pontarlier</span> <span className="mr-2  bg-gray-900 p-1   rounded-3xl">Préparateur de commandes</span> <br />   
              <span className="text-2xl underline my-2">E.LECLERC</span> <br />
              Préparation des commandes clients, Respect des normes de qualité de
              préparation.
            </p>
          </div>
          <div className="rounded-6xl bg-gray-900 text-white w-6  ">
            <FontAwesomeIcon icon={faFileContract} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden">
            <span className="mr-2 years">2010-2013 Dijon</span> <span className="mr-2  bg-gray-900 p-1   rounded-3xl">Animateur périscolaire </span> <br /> 
              <span className="text-2xl underline my-2">Mairie de Dijon</span> <br />
              Encadrer par l’animation un groupe d’enfants. Appliquer et contrôler
              les règles de sécurité dans les activités.
            </p>
          </div>
          <div className="rounded-6xl bg-gray-900 text-white w-6  ">
            <FontAwesomeIcon icon={faFileContract} />
          </div>
          <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
            <p className="w-96 px-1 pb-5 pt-3  text-white overflow-hidden">
             <span className="mr-2 years">2010-2013 Dijon</span> <span className="mr-2  bg-gray-900 p-1   rounded-3xl">Vendangeur(porteur) </span> <br /> 
              <span className="text-2xl underline my-2">
                Domaine Albert Bichôt en Côtes d'or
              </span>{" "}
              <br />
              Employé saisonnier
            </p>
          </div>
        </div>
      </Fade>
      
    </div>
  );
};

export default Resume;
