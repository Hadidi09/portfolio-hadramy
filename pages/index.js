import Head from "next/head";
import Image from "next/image";
import React from "react";
import Competences from "./components/competences";
import Description from "./components/description";
import Layout from "./components/Layout";
import Projets from "./components/projets";
import Resume from "./components/resume";

import dynamic from 'next/dynamic'

const DynamicLazyComponentCompetences = dynamic(() => import('./components/competences'), {
  
})

export default function Home() {
  return (
   
    <Layout   page="ndiaye cheikh el hadramy">
      <div className="snow-effect "></div>
      <Description />
      <DynamicLazyComponentCompetences />
      <Projets />
      <Resume />
    </Layout>
   
  );
}
