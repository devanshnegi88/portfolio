import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { StatsSection } from './sections/StatsSection';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import SkillsMarquee from './components/SkillsMarquee';
import { ExperienceSection } from './sections/ExperienceSection';
import { SkillsSection } from './sections/SkillsSection';
import { GitHubSection } from './sections/GitHubSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { EducationSection } from './sections/EducationSection';
import { ContactSection } from './sections/ContactSection';
import { siteMeta } from './data/portfolioData';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

document.title = siteMeta.title;

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingScreen />
      <div className="min-h-screen bg-[#0A0A0F]">
        <Navbar />
        <main>
          <HeroSection />
          <StatsSection />
          <AboutSection />
          <SkillsMarquee />
          <ProjectsSection />
          <ExperienceSection />
          <SkillsSection />
          <GitHubSection />
          <CertificationsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
