import {
  ContactSection,
  EducationSection,
  HeroSection,
  Navbar,
  ProjectsSection,
  ScrollStrikerRail,
  SiteFooter,
  TechStackSection,
} from "@/app/_components/home";
import {
  featuredProjects,
  footerSocialLinks,
  navLinks,
  projectTechIcons,
  techStack,
} from "@/app/_data/home-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-on-background relative">
      <Navbar links={navLinks} />

      {/* Kinetic Interactive Striker & Goal Rail (Right Margin) */}
      <ScrollStrikerRail />

      <main className="flex flex-col">
        <HeroSection />
        <ProjectsSection projects={featuredProjects} techIcons={projectTechIcons} />
        <TechStackSection categories={techStack} />
        <EducationSection />
        <ContactSection />
      </main>

      <SiteFooter socialLinks={footerSocialLinks} />
    </div>
  );
}
