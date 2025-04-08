
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
