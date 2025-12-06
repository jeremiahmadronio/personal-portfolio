import { Navigation } from "./components/navigation"
import { HeroSection } from "./components/hero-section"
import { AboutSection } from "./components/about-section"
import { TechStackSection } from "./components/tech-stack-section"
import { HowIWorkSection } from "./components/how-i-work-section"
import { ExperienceSection } from "./components/experience-section"
import { ProjectsSection } from "./components/projects-section"
import { ContactSection } from "./components/contact-section"
import { Footer } from "./components/footer"
import { ChatWidget } from "./components/chat-widget"
import { ServicesSection } from "./components/my-service-section"


export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <HowIWorkSection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </main>
  )
}
