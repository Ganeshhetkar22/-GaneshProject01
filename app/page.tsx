'use client';

import dynamic from 'next/dynamic';
import LoadingScreen from '@/components/portfolio/LoadingScreen';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Services from '@/components/portfolio/Services';
import Projects from '@/components/portfolio/Projects';
import Skills from '@/components/portfolio/Skills';
import Testimonials from '@/components/portfolio/Testimonials';
import Experience from '@/components/portfolio/Experience';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

const CustomCursor = dynamic(() => import('@/components/portfolio/CustomCursor'), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Testimonials />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
