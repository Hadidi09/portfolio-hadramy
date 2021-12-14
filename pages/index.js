import Head from "next/head";
import Image from "next/image";
import React from "react";
import Competences from "./components/competences";
import Description from "./components/description";
import Layout from "./components/Layout";
import Projets from "./components/projets";
import Resume from "./components/resume";
import dynamic from 'next/dynamic'

const DynamicLazyComponentDescription= dynamic(() => import('./components/description'), { ssr : false
  
})

const DynamicLazyComponentCompetences = dynamic(() => import('./components/competences'), { ssr : false
  
})
const DynamicLazyComponentProjets = dynamic(() => import('./components/projets'), { ssr : false
  
})
const DynamicLazyComponentResume = dynamic(() => import('./components/resume'), { ssr : false
  
})


export default function Home() {
  return (
   
    <Layout   page="ndiaye cheikh el hadramy">
      <DynamicLazyComponentDescription />
      <DynamicLazyComponentCompetences />
      <DynamicLazyComponentProjets />
      <DynamicLazyComponentResume />
    </Layout>
   
  );
}
