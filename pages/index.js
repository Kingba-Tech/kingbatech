import Head from 'next/head';

import Layout from '../src/components/Layout/Layout';
import Hero from '../src/sections/Hero';
import Projects from '../src/sections/Projects';
import Testimonials from '../src/sections/Testimonials';
import Solutions from '../src/sections/Solutions';
import Cta from '../src/components/Cta';

export default function Home() {
  return (
    <>
      <Head>
        <title>Kingba Tech - Best IT Service Provider in Bangladesh</title>
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
      <Cta />
    </>
  );
}
