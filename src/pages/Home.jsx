import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden relative">
      {/* Ambient Drifting Background Glows */}
      <motion.div 
        animate={{
          x: [0, '50vw', '80vw', '30vw', 0],
          y: [0, '20vh', '40vh', '60vh', 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-[-10%] left-[-10%] w-[30vw] h-[30vw] rounded-full bg-primary/40 blur-[80px] pointer-events-none -z-10 mix-blend-multiply"
      />
      <motion.div 
        animate={{
          x: [0, '-40vw', '-70vw', '-20vw', 0],
          y: [0, '-30vh', '-50vh', '-10vh', 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-secondary/40 blur-[90px] pointer-events-none -z-10 mix-blend-multiply"
      />
      <motion.div 
        animate={{
          x: [0, '30vw', '-30vw', 0],
          y: [0, '-40vh', '20vh', 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-1/2 left-1/2 w-[25vw] h-[25vw] rounded-full bg-accent/30 blur-[70px] pointer-events-none -z-10 mix-blend-multiply"
      />

      {/* Fixed page border */}
      <div className="fixed inset-0 border-[6px] md:border-[10px] border-primary pointer-events-none z-50"></div>

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
