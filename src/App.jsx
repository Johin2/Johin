import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NowSection from './components/NowSection';
import SelectedWork from './components/SelectedWork';
import ResearchSection from './components/ResearchSection';
import ExperienceSection from './components/ExperienceSection';
import StackSection from './components/StackSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <NowSection />
        <SelectedWork />
        <ResearchSection />
        <ExperienceSection />
        <StackSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
