import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Career from '@/components/Career';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

// Canvas must be client-only — no SSR
const NetworkCanvas = dynamic(() => import('@/components/NetworkCanvas'), { ssr: false });
const Cursor = dynamic(() => import('@/components/Cursor'), { ssr: false });

export default function Home() {
  return (
    <>
      <Cursor />
      <NetworkCanvas />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Career />
        <Education />
        <Skills />
        <Stats />
      </main>
      <Footer />
    </>
  );
}
