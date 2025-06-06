import Header from "@/components/Header";
import FooterSection from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Intro from "@/components/Intro";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className=" mx-auto px-4 py-8 min-h-screen min-w-screen bg-white space-y-8">
        <Intro />
        <AboutMe />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <FooterSection />
    </>
  );
}
