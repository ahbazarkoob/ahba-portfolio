"use client";
import AboutSection from "@/components/About";
import ContactSection from "@/components/contact-us-section";
import Footer from "@/components/footerSection";
import HeroSection from "@/components/hero-section";
import IntroAnimation from "@/components/intro-animation";
import MobileNav from "@/components/mobile-nav";
import Navbar from "@/components/navbar";
import ExperienceSection from "@/components/ProfessionalExperience";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/Skills copy";
import { useState } from "react";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      {!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}
      <Navbar />
      <MobileNav />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
