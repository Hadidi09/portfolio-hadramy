import Head from "next/head";
import Image from "next/image";
import React from "react";
import Competences from "../components/Competences";
import Description from "../components/Description";
import Layout from "../components/Layout";
import Projets from "../components/Projets";
import Resume from "../components/Resume";

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
