import dynamic from "next/dynamic";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";

const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection").then((mod) => mod.ServicesSection));
const SkillsSection = dynamic(() => import("@/components/sections/SkillsSection").then((mod) => mod.SkillsSection));
const ProjectsSection = dynamic(() => import("@/components/sections/ProjectsSection").then((mod) => mod.ProjectsSection));
const StatsSection = dynamic(() => import("@/components/sections/StatsSection").then((mod) => mod.StatsSection));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection").then((mod) => mod.TestimonialsSection));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then((mod) => mod.ContactSection));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
