import Head from 'next/head'
import Image from 'next/image'
import Description from '../components/Description'
import Layout from '../components/Layout'
import Projets from '../components/Projets'


export default function Home()
{
  return (
    <Layout page="index.js">
      <Description />
      <Projets />
    </Layout>
  )
}
