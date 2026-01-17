import { ArrowDown, GraduationCap, Code, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image - Left Side */}
          <div className="flex-shrink-0">
            <div className="p-1 bg-gradient-to-br from-primary to-primary/70 rounded-lg">
              <img
                src="/src/assets/my dp.png"
                alt="Ruvishan Maleesha"
                className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-lg border-2 border-border"
              />
            </div>
          </div>

          {/* Details - Right Side */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-unbounded">
              <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Ruvishan
              </span>
              <span className="text-accent ml-2 opacity-0 animate-fade-in-delay-2 text-glow">
                {" "}
                Maleesha
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-foreground font-semibold opacity-0 animate-fade-in-delay-2">
              Software Engineering Undergraduate
            </h2>

            <p className="text-base md:text-lg text-muted-foreground opacity-0 animate-fade-in-delay-3 font-montserrat max-w-2xl">
              I am a Software Engineering undergraduate actively seeking an internship where I can apply my skills in full-stack web development, AI-integrated systems, and user-centered design, while learning from real-world engineering practices and contributing meaningfully to a professional development team.
            </p>

            {/* Key Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 opacity-0 animate-fade-in-delay-4">
              <div className="flex flex-col items-center sm:items-start">
                <div className="p-2 rounded-full bg-accent/20 mb-2 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5" color="hsl(var(--accent))" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base">Education</h3>
                <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">Software Engineering at SLIIT</p>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="p-2 rounded-full bg-secondary/20 mb-2 flex items-center justify-center">
                  <Code className="h-5 w-5" color="hsl(var(--secondary))" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base">Web Dev</h3>
                <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">Full-stack Applications</p>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="p-2 rounded-full bg-accent/20 mb-2 flex items-center justify-center">
                  <Sparkles className="h-5 w-5" color="hsl(var(--accent))" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base">AI Integration</h3>
                <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">Google Gemini API</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in-delay-4 justify-center md:justify-start">
              <a href="#projects" className="cosmic-button font-montserrat mx-auto sm:mx-0">
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 mx-auto sm:mx-0 text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5" color="hsl(var(--accent))" />
      </div>
    </section>
  );
};
