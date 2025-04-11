
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-light">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
