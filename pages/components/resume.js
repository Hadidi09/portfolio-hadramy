import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  return (
    <div className=" sm:flex flex-col justify-center items-start text-center ml-12  md:ml-48 my-5  lg:ml-60  lg:flex-row   " id="resume">
      <div className="resume flex items-start  flex-col col-start-2 col-span-3 lg:mr-80 ">
        <h3 className="text-2xl text-white mb-2">Formation</h3>
        <div className="rounded-6xl bg-gray-900 text-white w-6 ">
          <FontAwesomeIcon icon={faAward} />
        </div>
        <div className="borderline border-l-4 h-auto ml-2.5  w-2 border-white">
          <p className="w-96 px-1 pb-5  text-white overflow-hidden">
            2020-2021 Pontarlier Opensclassrooms <br />
            <span className="text-2xl">1ère année STAPS</span>
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
          <p className="w-96 px-1 pb-5  text-white overflow-hidden">
            2011-2013 Dijon Université de Bourgogne <br />
            Une culture générale reposant sur: une bonne connaissance de toutes
            les périodes et de toutes les spécialités de l’histoire.
          </p>
        </div>
        <div className="rounded-6xl bg-gray-900 text-white w-6  ">
          <FontAwesomeIcon icon={faAward} />
        </div>
        <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
          <p className="w-96 px-1 pb-5  text-white overflow-hidden">
            2010-2011 Dijon Université de Bourgogne <br />
            <span className="text-2xl">1ère année STAPS</span> <br />
            Psychologie, Sociologie, Histoire du sport, Natation, Gymnastique,
            Athlétisme, Sports Collectifs, Danse.
          </p>
        </div>
        <div className="rounded-6xl bg-gray-900 text-white w-6  ">
          <FontAwesomeIcon icon={faAward} />
        </div>
        <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
          <p className="w-96 px-1 pb-5  text-white overflow-hidden">
            2009-2010 Orléans Université d'Orléans <br />
            <span className="text-2xl">
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
          <p className="w-96 px-1 pb-5  text-white overflow-hidden">
            2008-2009 Nouakchott Lycée Cheikh Moussa <br />
            <span className="text-2xl">Baccalauréat Général</span> <br />
            Bac L
          </p>
        </div>
      </div>
      <div className="resume flex items-start flex-col col-start-5  lg:mr-80   ">
        <h3 className="text-2xl text-white w-72 mb-2">
          Expérience professionnelle
        </h3>
        <div className="rounded-6xl bg-gray-900 text-white w-6 ">
          <FontAwesomeIcon icon={faFileContract} />
        </div>
        <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
          <p className="w-96 px-1 pb-5  text-white overflow-hidden">
            2020-2020 Chaffois Ouvrier de carrière <br />
            Assistance à la surveillance et entretien des installations de
            concassage.
          </p>
        </div>
        <div className="rounded-6xl bg-gray-900 text-white w-6  ">
          <FontAwesomeIcon icon={faFileContract} />
        </div>
        <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
          <p className="w-96 px-1 pb-5  text-white overflow-hidden">
            2019-2019 Les fins/Levier Manoeuvre Paysagiste <br />
            <span className="text-2xl">
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
          <p className="w-96 px-1 pb-5  text-white overflow-hidden">
            2018-2019 Pontarlier Manoeuvre Chantier <br />
            <span className="text-2xl">
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
          <p className="w-96 px-1 pb-5  text-white overflow-hidden">
            2017-2018 Pontarlier Préparateur de commandes <br />
            <span className="text-2xl">E.LECLERC</span> <br />
            Préparation des commandes clients, Respect des normes de qualité de
            préparation.
          </p>
        </div>
        <div className="rounded-6xl bg-gray-900 text-white w-6  ">
          <FontAwesomeIcon icon={faFileContract} />
        </div>
        <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
          <p className="w-96 px-1 pb-5  text-white overflow-hidden">
            2010-2013 Dijon Animateur périscolaire <br />
            <span className="text-2xl">Mairie de Dijon</span> <br />
            Encadrer par l’animation un groupe d’enfants. Appliquer et contrôler
            les règles de sécurité dans les activités.
          </p>
        </div>
        <div className="rounded-6xl bg-gray-900 text-white w-6  ">
          <FontAwesomeIcon icon={faFileContract} />
        </div>
        <div className="borderline border-l-4 h-auto ml-2.5 w-2 border-white">
          <p className="w-96 px-1 pb-5  text-white overflow-hidden">
            2010-2013 Dijon Vendangeur(porteur) <br />
            <span className="text-2xl">
              Domaine Albert Bichôt en Côtes d'or
            </span>{" "}
            <br />
            Employé saisonnier
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
