import Head from 'next/head';

import Layout from '../src/components/Layout/Layout';
import Hero from '../src/sections/Hero';
import Technologies from '../src/sections/Technologies';
import Projects from '../src/sections/Projects';
import Process from '../src/sections/Process';
import Testimonials from '../src/sections/Testimonials';
import OurStory from '../src/sections/OurStory';
import Solutions from '../src/sections/Solutions';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Kingba Tech</title>
        <meta
          name='description'
          content='The best creative IT intuitive and services for the people from the youth of this tech era. '
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <Projects />
      <Solutions />
      <Testimonials />
    </Layout>
  );
}
