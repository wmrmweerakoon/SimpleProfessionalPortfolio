import { ArrowDown, GraduationCap, Code, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 py-12 pt-20"
    >
      <div className="container max-w-6xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12">
          {/* Profile Image - Left Side */}
          <div className="flex-shrink-0 flex justify-center md:block order-2 md:order-1">
            <div className="p-1 bg-gradient-to-br from-primary to-secondary rounded-xl overflow-hidden shadow-xl shadow-primary/20">
              <img
                src="/src/assets/my dp.png"
                alt="Ruvishan Maleesha"
                className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-xl border-4 border-background bg-background"
              />
            </div>
          </div>

          {/* Details - Right Side */}
          <div className="flex-1 text-center md:text-left space-y-6 order-1 md:order-2">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat">
                <span className="opacity-0 animate-fade-in">Hi, I'm</span><br/>
                <span className="text-primary opacity-0 animate-fade-in-delay-1 block mt-1">
                  Ruvishan Maleesha
                </span>
              </h1>

              <h2 className="text-lg md:text-xl lg:text-2xl text-foreground font-semibold opacity-0 animate-fade-in-delay-2 text-secondary">
                Software Engineering Undergraduate
              </h2>
            </div>

            <p className="text-base md:text-lg text-muted-foreground opacity-0 animate-fade-in-delay-3 max-w-xl mx-auto md:mx-0 leading-relaxed">
              I am a Software Engineering undergraduate actively seeking an internship where I can apply my skills in full-stack web development, AI-integrated systems, and user-centered design, while learning from real-world engineering practices and contributing meaningfully to a professional development team.
            </p>

            {/* Key Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 opacity-0 animate-fade-in-delay-4 max-w-3xl mx-auto md:mx-0">
              <div className="flex flex-col items-center sm:items-start">
                <div className="p-3 rounded-full bg-blue-500 mb-2 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <GraduationCap className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base mb-1">Education</h3>
                <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left max-w-[120px]">
                  Software Engineering at SLIIT
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="p-3 rounded-full bg-green-500 mb-2 flex items-center justify-center shadow-lg shadow-green-500/20">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base mb-1">Web Dev</h3>
                <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left max-w-[120px]">
                  Full-stack Applications
                </p>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <div className="p-3 rounded-full bg-purple-500 mb-2 flex items-center justify-center shadow-lg shadow-purple-500/20">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-sm sm:text-base mb-1">AI Integration</h3>
                <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left max-w-[120px]">
                  Google Gemini API
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 opacity-0 animate-fade-in-delay-4 justify-center md:justify-start">
              <a href="#projects" className="cosmic-button font-montserrat mx-auto sm:mx-0 min-w-[160px] py-2 text-sm md:text-base">
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 mx-auto sm:mx-0 text-center min-w-[160px] font-medium text-sm md:text-base"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  );
};
