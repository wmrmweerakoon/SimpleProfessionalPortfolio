import { ArrowDown } from "lucide-react";
import { mdiLinkedin } from '@mdi/js';
import { Icon } from '@mdi/react';

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 py-12 pt-20"
    >
      <div className="container max-w-6xl mx-auto z-10 px-4">
        <div className="flex flex-col md:flex-row items-center justify-end gap-32 w-full">
          {/* Profile Image - Left Side */}
          <div className="flex justify-center md:justify-start w-2/5 pl-8">
            <img
              src="/profile.png"
              alt="Ruvishan Maleesha"
              className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full"
            />
          </div>

          {/* Content - Right Side */}
          <div className="space-y-6 text-left max-w-2xl w-3/5">
            <div className="space-y-4">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-ubuntu leading-tight">
                Let's Build & Solve
              </h1>

              <h2 className="text-base sm:text-lg md:text-xl text-primary font-semibold">
                Software Engineering Undergraduate at SLIIT
              </h2>

              <h3 className="text-sm md:text-base text-muted-foreground ">
                Full-Stack Developer, AI Application Builder
              </h3>
            </div>

            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
              I am a Software Engineering undergraduate actively seeking an internship where I can apply my skills in full-stack web development, AI-integrated systems, and user-centered design, while learning from real-world engineering practices and contributing meaningfully to a professional development team.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              {/* LinkedIn Button */}
              <a 
                href="https://www.linkedin.com/in/ruvishan-maleesha-814510378" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300 text-base font-medium flex items-center justify-center gap-2"
              >
                <Icon path={mdiLinkedin} size={1} className="mr-2" color="white"/>
                LinkedIn
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
