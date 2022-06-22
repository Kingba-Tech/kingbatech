import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../src/components/Layout/Layout';
import Hero from '../src/sections/Hero/Hero';
import Technologies from '../src/sections/Technologies/Technologies';
import Projects from '../src/sections/Projects/Projects';
import Process from '../src/sections/Process/Process';
import Testimonials from '../src/sections/Testimonials/Testimonials';
import OurStory from '../src/sections/OurStory';

export default function Home() {
  return (
    <Layout className={styles.container}>
      <Head>
        <title>Kingba Tech</title>
        <meta
          name='description'
          content='The best creative IT intuitive and services for the people from the youth of this tech era. '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero />
      <Technologies />
      <Process />
      <Projects />
      <Testimonials />
      <OurStory />
    </Layout>
  );
}
