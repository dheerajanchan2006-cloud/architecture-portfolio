import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Achievements from '@/components/sections/Achievements';
import Resume from '@/components/sections/Resume';
import Contact from '@/components/sections/Contact';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Resume />
      <Contact />
      <ScrollToTop />
    </>
  );
}
