import { Fragment } from 'react';
import Head from 'next/head';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Apply from '../components/Apply/Apply';
import Team from '../components/Team/Team';
import Partners from '../components/Partners/Partners';




export default function Home() {
  return <Fragment>
            <Head>
              <title>Artreus</title>
              <meta name="description" content="Artreus is the best platform to buy sell and interact with the best Nft projects out there." />
              <meta name="keyword" content="Artreus, Artreus Website, All about Artreus, What is Artreus" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
          <Header/>
          <Partners/>
          <About/>
          <Apply/>
          <Team/>
      </Fragment>   
  
}
