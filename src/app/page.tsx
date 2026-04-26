import {
  ContactSection,
  EducationSection,
  HeroSection,
  Navbar,
  ProjectsSection,
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
    <div className="min-h-screen bg-background text-on-background">
      <Navbar links={navLinks} />

      <main className="flex flex-col">
        <HeroSection />
        <EducationSection />
        <TechStackSection categories={techStack} />
        <ProjectsSection projects={featuredProjects} techIcons={projectTechIcons} />
        <ContactSection />
      </main>

      <SiteFooter socialLinks={footerSocialLinks} />
    </div>
  );
}
