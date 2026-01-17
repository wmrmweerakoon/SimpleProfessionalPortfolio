import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
 {
    id: 1,
    title: "LeafLink – Plant Marketplace",
    description: "Full-stack MERN e-commerce platform for buying and selling plants. Features secure JWT authentication, Stripe payments, seller & admin dashboards, Cloudinary image storage, and an AI-powered plant care assistant using the Gemini API.",
    image: "/projects/Plant MarketPlace.png",
    tags: ["React", "Vite", "TailwindCSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Stripe", "Cloudinary", "Gemini API", "React Toastify"],
    demoUrl: "#",
    githubUrl: "https://github.com/wmrmweerakoon/Plant-Marketplace.git",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "A sleek and professional portfolio website showcasing my skills, projects, and experience. Built with modern web technologies to highlight my expertise in software engineering and UI/UX design.",
    image: "/projects/Portfolio.png",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Framer Motion", "React Parallax Tilt", "Responsive Design"],
    demoUrl: "#",
    githubUrl: "https://github.com/wmrmweerakoon/Personal-Portfolio",
  },
  {
    id: 3,
    title: "YouCalm Mobile UI Prototype",
    description: "Mobile app UI/UX prototype designed in Figma to promote mindfulness and stress relief.",
    image: "/projects/Youcalm.png",
    tags: ["Figma", "UI/UX", "Prototyping", "Mindfulness", "Mobile Design"],
    demoUrl: "#",
    githubUrl: "https://github.com/wmrmweerakoon/YouCalm-Mobile-UI-Prototype",
 },
  {
    id: 4,
    title: "AI PDF Content Finder",
    description: "Full-stack AI web application that extracts PDF content and answers user questions using Google Gemini. Includes database storage, deployment, and a responsive UI.",
    image: "/projects/AI_PDF.png",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express.js", "PDF.js", "Gemini API"],
    demoUrl: "#",
    githubUrl: "https://github.com/wmrmweerakoon/AskMyPDF.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-unbounded">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div key={key} className="bg-card rounded-xl overflow-hidden shadow-lg border-border flex flex-col h-full cursor-pointer hover:shadow-xl transition-shadow duration-300">
              <div className="overflow-hidden flex items-center justify-center bg-muted p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain max-h-[200px] max-w-full rounded-lg"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-foreground"> {project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                  <span
                  key={idx}
                  className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30 whitespace-nowrap"
                >
                  {tag}
                </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30 whitespace-nowrap">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center pt-2">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors duration-300 p-2 rounded-full hover:bg-secondary/10"
                    >
                      <ExternalLink size={20} color="hsl(var(--secondary))" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors duration-300 p-2 rounded-full hover:bg-accent/10"
                    >
                      <Github size={20} color="hsl(var(--accent))" />
                    </a>
                  </div>
                  
                  <div className="flex space-x-2">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs px-3 py-1.5 rounded-full bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  Live Demo
                </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 px-8 py-3 text-base"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/wmrmweerakoon"
          >
            View More Projects <ArrowRight size={18} color="hsl(var(--primary-foreground))" />
          </a>
        </div>
      </div>
    </section>
  );
};
