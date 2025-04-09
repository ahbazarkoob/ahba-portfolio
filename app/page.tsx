import Header from "@/components/Header";
import FooterSection from "@/components/Footer";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EDE7D9]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <AboutMe />
        <Experience />
        <Skills />
        <Education />
      </main>
      <FooterSection />
    </div>
  );
}
