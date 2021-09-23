import Head from "next/head";
import Image from "next/image";
import React from "react";
import Competences from "./components/competences";
import Description from "./components/description";
import Layout from "./components/Layout";
import Projets from "./components/projets";
import Resume from "./components/resume";

export default function Home() {
  return (
   
    <Layout page="Portfolio">
      <Description />
      <Competences />
      <Projets />
      <Resume />
    </Layout>
   
  );
}
