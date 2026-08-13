import About from "@/components/About";
import Backdrop from "@/components/Backdrop";
import Contact from "@/components/Contact";
import Experience, { hasExperienceSection } from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";

export default function Home() {
  // Bölüm numaraları sırayla üretilir; "Deneyim" verisi yoksa numaralarda boşluk kalmaz.
  let counter = 0;
  const next = () => String(++counter).padStart(2, "0");

  const aboutIndex = next();
  const experienceIndex = hasExperienceSection ? next() : "";
  const skillsIndex = next();
  const projectsIndex = next();
  const timelineIndex = next();
  const contactIndex = next();

  return (
    <>
      <Backdrop />
      <Nav />
      <main className="flex-1">
        <Hero />
        <About index={aboutIndex} />
        <Experience index={experienceIndex} />
        <Skills index={skillsIndex} />
        <Projects index={projectsIndex} />
        <Timeline index={timelineIndex} />
        <Contact index={contactIndex} />
      </main>
      <Footer />
    </>
  );
}
