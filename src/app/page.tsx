import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Career from '@/components/Career';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
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
