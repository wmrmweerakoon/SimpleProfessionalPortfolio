import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-center items-center">
      <p className="text-sm text-muted-foreground mx-auto text-center">
        &copy; {new Date().getFullYear()} Designed & Developed by Ruvishan Maleesha.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-accent/20 hover:bg-accent/30 text-accent transition-colors absolute right-4"
      >
        <ArrowUp size={20} color="hsl(var(--accent))" />
      </a>
    </footer>
  );
};
